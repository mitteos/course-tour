import styled from "styled-components";
import {FormButton, FormInput} from "../../UI";
import {SubmitHandler, useForm} from "react-hook-form";
import Link from "next/link";

interface RegisterFields {
    email: string;
    password: string;
    name: string;
    phone: string;
}

export const Registration = () => {

    const {register, formState: {errors}, handleSubmit} = useForm<RegisterFields>()
    
    const onSubmit: SubmitHandler<RegisterFields> = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <div>
            <Title>Регистрация</Title>
            <Container onSubmit={handleSubmit(onSubmit)}>
                <FormInput placeholder="Email" register={register} name="email" errors={errors.email} required={true}/>
                <FormInput placeholder="Пароль" register={register} name="password" errors={errors.password} required={true}/>
                <FormInput placeholder="ФИО" register={register} name="name" errors={errors.name} required={true}/>
                <FormInput placeholder="Телефон" register={register} name="phone" errors={errors.phone} required={true}/>
                <FormButton>Зарегистрироваться</FormButton>
                <SwitchContainer>
                    Уже есть аккаунт?
                    <SwitchLink href={{
                        pathname: "/auth",
                        query: {type: "login"}
                    }}> Войти</SwitchLink>
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