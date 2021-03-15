import React from "react";
import Input from "./Input";

// Component story
export default {
  title: "Input",
  component: Input,
};

export const Small = () => <Input variant="small"></Input>;
export const Medium = () => <Input variant="medium"></Input>;
export const Large = () => <Input variant="large"></Input>;
