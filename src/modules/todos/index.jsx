import { Grid } from "@material-ui/core";
import React from "react";
import { ToDoForm } from "./components/todo-form";
import { ToDoList } from "./components/todo-list";

import { TODO_STATUS } from "./constants";
import { useToDos } from "./state";

export const ToDos = () => {
  const list = useToDos();
  let doneList = [],
    pendingList = [];
  list.forEach((item) => {
    item.status === TODO_STATUS.Done
      ? doneList.push(item)
      : pendingList.push(item);
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ToDoForm />
      </Grid>
      <Grid item xs={6}>
        <ToDoList title="Pending" list={pendingList} />
      </Grid>
      <Grid item xs={6}>
        <ToDoList title="Done" list={doneList} />
      </Grid>
    </Grid>
  );
};
