import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/Firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpHeader, SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const{ displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password doesn't match");
            return
        }
       try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
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
            <SignUpHeader>Don't have an account</SignUpHeader>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name"
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    required
                />

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
                 <FormInput 
                    label="Confirm Password"
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                />
                <Button type="submit">sign up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;