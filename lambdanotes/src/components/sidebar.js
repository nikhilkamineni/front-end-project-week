import React from 'react';
import styled from 'styled-components';

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100vh;
  border-right: 1px solid rgb(151, 151, 151);
  padding: 20px;
  background-color: rgb(216, 216, 216);

  h1 {
    margin-bottom: 20px;
  }
`

const ButtonStyled = styled.button`
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
  background-color: rgb(94, 190, 195);
  color: #FFFFFF;
  outline: none;
  font-size: 0.9rem;
  font-weight: bold;
`

const Sidebar = (props) => {
  return(
    <SideBarStyled>
      <h1>Lambda Notes</h1>
      <ButtonStyled onClick={props.viewNotes}>View Your Notes</ButtonStyled>
      <ButtonStyled onClick={props.createNewNoteForm}>+ Create New Note</ButtonStyled>
    </SideBarStyled>
  )
}

export default Sidebar;