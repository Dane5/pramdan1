import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import UpdateMeals from "../components/UpdateMeals.js";
import Meal from "../components/Meal"

function MealPlan(meal) {
  const [meals, setMeals] = useState([]);
  const [visible, setVisible] = useState(false)



  function handleDelete(id){
    fetch(`/meals/${id}`
,{
      method:'DELETE'
    })
    const updatedMeals = meals.filter((meal) => {
        return meal.id !== id
      })
      setMeals(updatedMeals)
}

function handleMealUpdate(id, mealInput){
    setVisible(!visible)

    const configObj = {
        id: id,
        title: mealInput.title,
        directions: mealInput.directions,
        prep_time: mealInput.prep_time,
        user_id: 1
      }
    
    fetch(`/meals/${id}`
    , 
    {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(configObj)
    })
    .then((r) => r.json())
    .then((data) => {
        console.log(data)
        const updatedMeals = meals.map((meal) => {
            if (meal.id === data.id) {
              return data
            } else {
              return meal
            }
          })
          setMeals(updatedMeals)
    })
}

  


  useEffect(() => {
    fetch("/meals")
      .then((r) => r.json())
      .then(setMeals);
  }, []);

  return (
    <Wrapper>
      {meals.length > 0 ? (
        meals.map((meal) => (
            <Meal visible={visible} setVisible={setVisible} meal={meal} handleDelete={handleDelete} handleMealUpdate={handleMealUpdate} />
        ))
      ) : (
        <>
          <h2>No Meals Found</h2>
          <Button as={Link} to="/new">
            Make a New meal
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

// const Meal = styled.article`
//   margin-bottom: 24px;
// `;

export default MealPlan;
