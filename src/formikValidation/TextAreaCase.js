import React from "react";
import {ErrorMessage, Field} from "formik";
import {TextError} from "./TextError";

export const TextAreaCase = (props) => {
    const {label, name, ...rest} = props

    return (
        <div className='field__body'>
            <div className='field__textarea'>
                <div className="container">
                    <label htmlFor={name}>{label}</label>
                    <Field as='textarea' id={name} name={name} {...rest} />
                    <ErrorMessage name={name} component={TextError}/>
                </div>
            </div>
        </div>

    )
}
