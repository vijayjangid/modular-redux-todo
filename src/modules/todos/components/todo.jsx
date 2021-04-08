import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { removeToDo, updateToDo } from "../state";
import { TODO_STATUS } from "../constants";

export const ToDo = ({ item }) => (
  <ListItem key={item.id}>
    <ListItemText primary={item.text} />
    <ListItemSecondaryAction>
      <Button
        variant="outlined"
        size="small"
        onClick={() =>
          updateToDo({
            ...item,
            status:
              item.status === TODO_STATUS.Pending
                ? TODO_STATUS.Done
                : TODO_STATUS.Pending
          })
        }
      >
        Move to {item.status === TODO_STATUS.Pending ? "Done" : "Pending"}
      </Button>
      <IconButton onClick={() => removeToDo(item)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
