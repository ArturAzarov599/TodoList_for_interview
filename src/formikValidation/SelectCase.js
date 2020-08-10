import React from "react";
import {ErrorMessage, Field} from "formik";
import {TextError} from "./TextError";

export const SelectCase = (props) => {
    const {label, name, option, ...rest} = props

    return (
        <div className='field__body'>
            <div className='field__select'>
                <div className="container">
                    <label htmlFor={name}>{label}</label>
                    <Field as={'select'} id={name} name={name} {...rest}>
                        {
                            option.map(option => {
                                return (
                                    <option key={option.id} value={option.value}>
                                        {option.value}
                                    </option>
                                )
                            })
                        }
                    </Field>
                    <ErrorMessage name={name} component={TextError}/>
                </div>
            </div>
        </div>

    )
}
