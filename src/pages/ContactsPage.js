import React from 'react'
import {Form, Formik} from "formik";
import {FormikControl} from "../formikValidation/FormikControl";
import * as Yup from 'yup'

export const ContactsPage = () => {

    const selectOptions = [
        {id: 0, value: ''},
        {id: 1, value: 'Don*t work'},
        {id: 2, value: 'Don*t start'},
        {id: 3, value: 'Other'},
    ]

    const initialValues = {
        email: '',
        comments: '',
        selectOption: '',

    }

    const onSubmit = (value, onSubmitProps) => {
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Input valid email').required('Required'),
        comments: Yup.string().required('Required'),
        selectOption: Yup.string().required('Choose one of values!'),

    })

    return (
        <div className={'contact__page'}>
            <div className='field__container'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {
                        formik => {
                            return <Form>
                                <FormikControl
                                    control={'input'}
                                    name='email'
                                    label='Your Email'
                                    type='text'
                                />

                                <FormikControl
                                    control='textarea'
                                    name='comments'
                                    label='Your Comment'
                                    type='text'
                                />

                                <FormikControl
                                    control='select'
                                    option={selectOptions}
                                    name='selectOption'
                                    label='Select Option'
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
            </div>
        </div>
    )
}
