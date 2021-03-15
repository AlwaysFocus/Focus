import React from "react";
import Button from "./Button";

// Write our story for the component
export default {
  title: "Button", // This needs to be unique for the entire project
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
