import { useState } from "react";
import styled from "styled-components";
import Modal from 'react-awesome-modal';


const MealDetailsCont = styled.div`
display: grid;
justify-content: center;
align-items: center;
`

const Input = styled.input`
margin-top: .5em;

`

const DirectionInput = styled.input`
margin-top: .5em;

`
const Button = styled.button`
margin-top: .5em;

`


function UpdateMeals({handleMealUpdate, id, setVisible, visible}){

const [mealInput, setMealInput] = useState({
    title: "",
    directions: "",
    prep_time: "",
  })
  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setMealInput({
      ...mealInput,
      [name]: value
    })
  }
  function handleSubmit(){
    handleMealUpdate(id, mealInput)
console.log(mealInput)
  }
return (
  <section>
    <Modal visible={visible} width="800" height="400" effect="fadeInUp" onClickAway={() => setVisible(!visible)}>
      {/* <CloseCont><AiOutlineClose color="black"/></CloseCont> */}
      <MealDetailsCont>
      <p>Title</p>
        <Input placeholder="Enter Title" name="title" onChange={(handleChange)}/>
        <p>Directions</p>
        <DirectionInput placeholder="Enter Directions" name="directions" onChange={(handleChange)}/>
        <p>Prep Time</p>
        <Input placeholder="Enter Prep Time" name="prep_time" onChange={(handleChange)}/>
        <Button onClick={handleSubmit}>Update</Button>
      </MealDetailsCont>
    </Modal>
  </section>
  )

}

  export default UpdateMeals;