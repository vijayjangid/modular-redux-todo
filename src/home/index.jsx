import React from "react";
import Container from "@material-ui/core/Container";

import { ToDo } from "../modules/todos/components/todo";

export const Home = () => (
  <Container maxWidth="sm">
    <ToDo />
  </Container>
);
