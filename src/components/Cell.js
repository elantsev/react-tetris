import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "./../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={"T"} color={TETROMINOS["T"].color} />
);

export default Cell;
