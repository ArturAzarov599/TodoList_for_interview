import React, {useState} from "react";
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {FormikControl} from "../formikValidation/FormikControl";
import {Redirect, Route, Switch} from "react-router-dom";
import {RegisterLoginPage} from "./RegisterLoginPage";

export const LoginPage = () => {

    const [haveAccount, setHaveAccount] = useState(true)

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    }

    const onSubmit = () => {
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Input valid email').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password*s must match').required('Require'),
    })


    if (!haveAccount) {
        return (
            <Switch>
                <Route exact path={''}>
                    <RegisterLoginPage/>
                    <Redirect to=''/>
                </Route>
            </Switch>
        )
    } else {
        return (
            <React.Fragment>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    {
                        formik => {
                            return <Form>

                                <FormikControl
                                    control='input'
                                    label='Email:'
                                    type='email'
                                    name='email'
                                />

                                <FormikControl
                                    control='input'
                                    label='Password:'
                                    type='password'
                                    name='password'
                                />

                                <FormikControl
                                    control='input'
                                    label='Confirm Password:'
                                    type='password'
                                    name='confirmPassword'
                                />

                                <div className='field__body'>
                                    <button
                                        disabled={!formik.isValid}
                                        type={'submit'}
                                    >
                                        Submit
                                    </button>
                                </div>

                                <div className='field__body'>
                                    <button
                                        onClick={() => setHaveAccount(false)}
                                        type={'submit'}
                                    >
                                        Don't have an account?
                                    </button>
                                </div>

                                <Redirect>

                                </Redirect>

                            </Form>
                        }
                    }
                </Formik>
            </React.Fragment>
        )
    }
}
