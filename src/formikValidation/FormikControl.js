import React from "react";
import {Input} from "./InputCase";
import {TextAreaCase} from "./TextAreaCase";
import {SelectCase} from "./SelectCase";

export const FormikControl = (props) => {

    const {control, ...rest} = props

    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'select':
            return <SelectCase {...rest}/>
        case 'radio':
            return
        case 'checkbox':
            return
        case 'textarea':
            return <TextAreaCase {...rest}/>
        case 'data':
            return
        default:
            return null;
    }
}
