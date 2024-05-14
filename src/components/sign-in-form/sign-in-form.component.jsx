import { useState } from "react";
import { signInWithGooglePopup, signAuthUserInWithEmailAndPassword } from "../../utils/Firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const{ email, password } = formFields;

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       try {
            const response = await signAuthUserInWithEmailAndPassword(email, password)
            console.log(response)
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
        <div className="sign-up-container">
            <h2>Already have an account</h2>
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
                <div className="buttons-container">
                    <Button type="submit">sign in</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;