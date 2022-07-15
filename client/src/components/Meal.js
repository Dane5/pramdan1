import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import UpdateMeals from "./UpdateMeals.js";



function Meal({visible, setVisible, meal, handleDelete, handleMealUpdate}) {




  function onDelete(){
    const id = meal.id
    handleDelete(id)
  }





  


 

  return(
    <MealContainer key={meal.id}>
    <Box>
    <Button variant="outline" onClick={() => setVisible(!visible)}>
      EDIT
      </Button>
      <UpdateMeals handleMealUpdate={handleMealUpdate} id={meal.id} visible={visible} setVisible={setVisible}/>
      <h2>{meal.title}</h2>
      <p>
        <em>Prep Time: {meal.Prep_time} minutes</em>
        &nbsp;·&nbsp;
        <cite>By {meal.user.username}</cite>
      </p>
      <ReactMarkdown>{meal.instructions}</ReactMarkdown>
      <Button onClick={onDelete}>
      DELETE
      </Button>
    </Box>
  </MealContainer>
  )
}











const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const MealContainer = styled.article`
  margin-bottom: 24px;
`;

export default Meal;
