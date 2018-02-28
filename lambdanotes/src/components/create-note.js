import React, { Component } from "react";
import styled from "styled-components";

// Styles
const CreateNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);

  button {
    width: 100px;
    margin-top: 20px;
    height: 50px;
    background-color: rgb(94, 190, 195);
    color: #ffffff;
    outline: none;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .NoteTitleInput {
    width: 50%;
    margin-top: 20px;
    outline: none;
    font-size: 1rem;
  }

  input:focus, textarea:focus {
    outline: 1px solid rgb(94, 190, 195);
  }

  .NoteContentInput {
    width: 80%;
    height: 300px;
    margin-top: 20px;
    outline: none;
    font-size: 1rem;
    resize: none;
  }
`;

// CreateNote Component
class CreateNote extends Component {
  state = {
    title: '',
    content: ''
  };

  handleTitleInput = event => {
    this.setState({ title: event.target.value });
  };

  handleContentInput = event => {
    this.setState({ content: event.target.value });
  };

  handleSave = () => {
    let newNote = {
      title: this.state.title,
      content: this.state.content,
      id: this.props.getNextId()
    }
    this.props.saveNewNote(newNote);
  }

  render() {
    return (
      <CreateNoteStyled>
        <h1>Create New Note:</h1>
        <input
          className="NoteTitleInput"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.handleTitleInput}
        />
        <textarea
          className="NoteContentInput"
          type="text"
          placeholder="Note Content"
          rows="10"
          cols="50"
          value={this.state.content}
          onChange={this.handleContentInput}
        />
        <button onClick={this.handleSave}>Save</button>
      </CreateNoteStyled>
    );
  }
} // CreateNote Component

export default CreateNote;
