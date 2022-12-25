import styled from "styled-components";
import React from "react";

interface FormButtonProps {
    children: React.ReactNode | React.ReactNode[];
}

export const FormButton: React.FC<FormButtonProps> = ({children}) => {
    return (
        <ButtonInner>
            {children}
        </ButtonInner>
    );
};

const ButtonInner = styled.button`
  background: #F4644A;
  box-shadow: 0 10px 20px rgba(88, 92, 229, 0.25);
  border-radius: 26px;
  color: #fff;
  padding: 17px 45px;
  cursor: pointer;
  border: 2px solid #F4644A;
  transition: all .3s ease;
  &:hover {
    background: none;
    color: #F4644A;
  }
`