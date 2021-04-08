import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { TODO_STATUS } from "../constants";
import { addToDo } from "../state";

export const ToDoForm = () => {
  const [text, setText] = useState("");
  const createNewToDo = () => {
    if (!text) return alert("Please enter text!");
    addToDo({ text, status: TODO_STATUS.Pending });
    setText("");
  };

  return (
    <Grid container justify="center" alignItems="center">
      <FormControl>
        <InputLabel htmlFor="input-todo">Task</InputLabel>
        <Input
          id="input-todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && createNewToDo()}
        />
        <FormHelperText id="my-helper-text">
          This taks will be added to Pending list
        </FormHelperText>
      </FormControl>
      <IconButton onClick={() => createNewToDo()}>
        <AddCircleIcon />
      </IconButton>
    </Grid>
  );
};
