import React from "react";
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {FormikControl} from "../formikValidation/FormikControl";

export const RegisterLoginPage = () => {

    const initialValues = {
        name: '',
        surname: '',
        age: '',
        photo: '', // soon
        email: '',
        password: '',
        confirmPassword: '',
        sex: '',
        company: ''
    }

    const onSubmit = (values) => console.log('This is your data:', values)

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        surname: Yup.string().required('Required'),
        age: Yup.string().required('Required'),
        email: Yup.string().email('Input valid email').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password*s must match').required('Require'),
        sex: Yup.string().required('Choose your sex'),
        company: Yup.string().required('Input your company'),

    })

    const typeOfSex = [
        {id: 0, value: ''},
        {id: 1, value: 'Man'},
        {id: 2, value: 'Woman'},
        {id: 3, value: 'Other'},
    ]

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
                                label='Name:'
                                name='name'
                            />

                            <FormikControl
                                control='input'
                                label='Surname:'
                                name='name'
                            />

                            <FormikControl
                                control='input'
                                label='Age:'
                                name='age'
                            />

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

                            <FormikControl
                                control='select'
                                label='Choose your Sex:'
                                name='sex'
                                option={typeOfSex}
                            />

                            <FormikControl
                                control='input'
                                label='Company:'
                                name='company'
                            />

                            <div className='field__body'>
                                    <button
                                        disabled={!formik.isValid}
                                        type={'submit'}
                                    >
                                        Submit
                                    </button>
                            </div>

                        </Form>
                    }
                }
            </Formik>
        </React.Fragment>
    )
}
