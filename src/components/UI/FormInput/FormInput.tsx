import styled from "styled-components";
import {FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";

interface InputProps<T extends FieldValues> {
    type?: string;
    required?: boolean;
    placeholder: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    errors: FieldError | undefined;
    minLength?: number;
    maxLength?: number;
    isDisabled?: boolean;
    className?: string;
}
interface Option {
    value: number;
    message: string;
}
interface RegisterOptions {
    required: string | boolean;
    minLength: 0 | Option | undefined;
    maxLength: 0 | Option | undefined;
}

export const FormInput = <T extends FieldValues>({className, isDisabled, minLength, maxLength, type = "text", placeholder, register, name, errors, required = false}: InputProps<T>) => {

    const registerOptions: RegisterOptions = {
        required: required && "Required",
        minLength: minLength && {
            value: minLength,
            message: `Minimum ${minLength} character`
        },
        maxLength: maxLength && {
            value: maxLength,
            message: `Maximum ${maxLength} character`
        },
    }

    return (
        <Container className={className}>
                <InputInner
                    placeholder={placeholder}
                    type={type}
                    $errors={errors}
                    disabled={isDisabled}
                    {...register(name, registerOptions)}
                />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  width: 452px;
`
const InputInner = styled.input<{$errors?: FieldError}>`
  width: 100%;
  border: none;
  font-size: 14px;
  color: #384ca2;
  box-shadow: 0 10px 20px rgba(88, 92, 229, 0.25);
  background: #fff;
  border-radius: 26px;
  padding: 18px 25px;
  transition: all .3s ease;
  border: ${({$errors}) => $errors?.message ? "1px solid #ff5959" : "1px solid #fff"};

  &:focus {
    outline: none;
    color: #1D2A5F;
  }
`
const ErrorText = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`
const InputStatus = styled.div`
	position: absolute;
	top: 50%;
	right: 25px;
	transform: translateY(-50%);
`