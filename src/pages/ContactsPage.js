import React from 'react'
import {Form, Formik} from "formik";
import {FormikControl} from "../formikValidation/FormikControl";
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {addMessageFromContactForm} from "../reducer/actions";
import {useHttp} from "../myHooks/useHttp";
import {toastMessage} from "../components/toastyfiMessages";

export const ContactsPage = () => {

    const {request} = useHttp()
    const dispatch = useDispatch();

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

    const onSubmit = async (value, onSubmitProps) => {
        try {
            await request('api/message/feedback', "POST", {...value})
            console.log(value);
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            dispatch(addMessageFromContactForm(value))
            toastMessage('Лист надіслано', 'info')
        } catch (e) {
            toastMessage(e.message || 'Щось пішло не так!', 'warning')
        }

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
