import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Typography } from "@material-ui/core";

import { ToDo } from "./todo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
    // maxWidth: 360
  },
  title: {
    padding: theme.spacing(2),
    borderBottom: "solid 1px rgba(0,0,0,0.2)"
  }
}));

export const ToDoList = ({ list, title }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <List className={classes.root} dense>
        {list.map((item) => (
          <ToDo key={item.id} item={item} />
        ))}
      </List>
    </div>
  );
};
