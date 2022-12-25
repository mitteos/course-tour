import styled from "styled-components";
import React from "react";
import {Header} from "components/UI";

interface MainLayoutProps {
    children: React.ReactNode | React.ReactNode[]
}
export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <Container>
            <Header />
            <Content>{children}</Content>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`
const Content = styled.div`
  height: 100%;
  flex: auto;
  min-height: 100vh;
`