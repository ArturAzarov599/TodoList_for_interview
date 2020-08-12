import React from "react";
import {ErrorMessage, Field} from "formik";
import {TextError} from "./TextError";

export const Input = (props) => {
    const {label, name, ...rest} = props

    return (
        <div className='field__body'>
            <div className='field__input'>
                <div className="container">
                    <label htmlFor={name}>{label}</label>
                    <Field id={name} name={name} {...rest} autoComplete="on" />
                    <ErrorMessage name={name} component={TextError}/>
                </div>
            </div>
        </div>

    )
}
