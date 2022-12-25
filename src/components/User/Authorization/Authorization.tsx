import styled from "styled-components";
import {FormButton, FormInput} from "../../UI";
import {SubmitHandler, useForm} from "react-hook-form";
import Link from "next/link";

interface LoginFields {
    email: string;
    password: string;
}

export const Authorization = () => {

    const {register, formState: {errors}, handleSubmit} = useForm<LoginFields>()

    const onSubmit: SubmitHandler<LoginFields> = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <div>
            <Title>Авторизация</Title>
            <Container onSubmit={handleSubmit(onSubmit)}>
                <FormInput placeholder="Email" register={register} name="email" errors={errors.email} required={true}/>
                <FormInput placeholder="Пароль" register={register} name="password" errors={errors.password} required={true}/>
                <FormButton>Войти</FormButton>
                <SwitchContainer>
                    Еще нет аккаунта?
                    <SwitchLink href={{
                        pathname: "/auth",
                        query: {type: "register"}
                    }}> Зерагистрироваться</SwitchLink>
                </SwitchContainer>
            </Container>
        </div>
    );
};

const Title = styled.div`
  font-size: 20px;
  color: #000000;
  margin-bottom: 45px;
  text-align: center;
  font-weight: 500;
`
const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`
const SwitchContainer = styled.p`
  font-size: 14px;
  color: #656565;
  text-align: center;
`
const SwitchLink = styled(Link)`
  color: #325CF1;
`