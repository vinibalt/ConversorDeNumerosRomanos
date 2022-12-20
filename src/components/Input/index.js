import { InputContainer } from "./styles";

const Input = ({value, type, onChange, placeholder, disabled}) => {
    return (
        <InputContainer>
        <input value={value} type={type} onChange={onChange} placeholder={placeholder} disabled={disabled}/>
        </InputContainer>
    )
}

export default Input;