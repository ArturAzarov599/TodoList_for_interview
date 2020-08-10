import React, {useState} from "react";
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {FormikControl} from "../formikValidation/FormikControl";
import {useDispatch, useSelector} from "react-redux";
import {addTask, removeTask} from "../reducer/actions";

export const MainPage = () => {

    const [value, setValue] = useState('')

    const list = useSelector((state) => state.taskList.taskList)
    const dispatch = useDispatch()

    const initialValues = {
        taskName: ''
    }

    const validationSchema = Yup.object({
        taskName: Yup.string().required('')
    })

    const onSubmit = () => {
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            const task = {
                name: value,
                id: list.length,
                status: false
            }
            if (value.length > 3) {
                dispatch(addTask(task))
            }

            setValue('')
        }
    }


    return (
        <>
            <div className="content">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {
                        () => {
                            return <Form>
                                <FormikControl
                                    control='input'
                                    type='text'
                                    label='Task Name'
                                    name='taskName'
                                    onChange={onChangeHandler}
                                    value={value}
                                    onKeyPress={onKeyPressHandler}
                                />
                            </Form>
                        }
                    }
                </Formik>
                <div className="container">
                    <ul>
                        {
                            list.map(element => <li key={element.id}>
                                <div>{element.name}</div>
                                <div className="content__btns"><input type="checkbox"
                                                                      defaultChecked={element.status}/>
                                    <div className="content__delete"
                                         onClick={() => {
                                             console.log(element.name);
                                             dispatch(removeTask(element.name))
                                         }}>&times;</div>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}
