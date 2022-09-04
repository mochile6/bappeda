import React from "react";
import { chakra } from "@chakra-ui/react";

const _Form = chakra("form");

const Form = React.forwardRef(({ children, ...props }, ref) => (
  <_Form ref={ref} {...props}>
    {children}
  </_Form>
));

export default Form;
