import { ButtonStyle } from "./style"
import { IButtonProps } from "./type"

const Button = ({text} : IButtonProps) => {
    return(
        <ButtonStyle>
            {text}
        </ButtonStyle>
    )
}

export default Button