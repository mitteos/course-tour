import {NextPage} from "next";
import {MainLayout} from "layouts";
import {useRouter} from "next/router";
import {Authorization, Registration} from "components/User";
import styled from "styled-components";

const Auth: NextPage = () => {

    const router = useRouter()

    return (
        <MainLayout>
            <Container>
            {
                router.query.type === "register"
                    ? <Registration />
                    : <Authorization />
            }
            </Container>
        </MainLayout>
    );
};

export default Auth;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`