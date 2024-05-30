import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInWithGooglePopup, signAuthUserInWithEmailAndPassword } from "../../utils/Firebase/firebase.utils";
import { SignUpHeader, SignUpContainer } from "../sign-up-form/sign-up-form.styles";
import { ButtonContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const{ email, password } = formFields;

    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       try {
            await signAuthUserInWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
        } catch(error) {
            console.log(error.message)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <SignUpHeader>Already have an account</SignUpHeader>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    required
                />
                 <FormInput 
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    required
                />
                <ButtonContainer>
                    <Button type="submit">sign in</Button>
                    <Button type="button" buttonType='google' onClick={SignInWithGoogle}>Google Sign In</Button>
                </ButtonContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm;