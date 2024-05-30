import { BasseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BasseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.InvertedButton]: InvertedButton,
    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton { ...otherProps }>{children}</CustomButton>
    )
}

export default Button;