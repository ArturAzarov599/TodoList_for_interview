import React, {useContext, useState} from "react";
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {FormikControl} from "../formikValidation/FormikControl";
import {Redirect, Route, Switch} from "react-router-dom";
import {RegisterLoginPage} from "./RegisterLoginPage";
import {useHttp} from "../myHooks/useHttp";
import {AuthContext} from "../context/AuthContext";

export const LoginPage = () => {

    const {request} = useHttp()
    const [haveAccount, setHaveAccount] = useState(true)
    const auth = useContext(AuthContext)

    const initialValues = {
        email: '',
        password: '',
    }

    const onSubmit = async (values) => {
        const response = await request('/api/user/enter', "POST", {...values})
        auth.login(response.token, response.email, response.userId)
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Input valid email').required('Required'),
        password: Yup.string().required('Required'),
    })


    if (!haveAccount) {
        return (
            <Switch>
                <Route exact path={'/contacts'}>
                    <RegisterLoginPage/>
                    <Redirect to='/contacts'/>
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
                                    >
                                        Don't have an account?
                                    </button>
                                </div>

                            </Form>
                        }
                    }
                </Formik>
            </React.Fragment>
        )
    }
}
