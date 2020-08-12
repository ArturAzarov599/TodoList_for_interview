import React, {useContext, useEffect, useState} from "react";
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {FormikControl} from "../formikValidation/FormikControl";
import {useDispatch, useSelector} from "react-redux";
import {addTask, changeStatus, removeTask} from "../reducer/actions";
import {toastMessage} from "../components/toastyfiMessages";
import {useHttp} from "../myHooks/useHttp";
import {AuthContext} from "../context/AuthContext";

export const MainPage = () => {

    const {email} = useContext(AuthContext)
    const [value, setValue] = useState('')
    const {request} = useHttp()
    const list = useSelector((state) => state.taskList.taskList)
    const dispatch = useDispatch()

    const initialValues = {
        taskName: ''
    }

    const validationSchema = Yup.object({
        taskName: Yup.string().required('')
    })

    useEffect(() => {
        async function getTasks() {

            const allTasks = await request("api/task/get")
            console.log(allTasks);
            dispatch(addTask(allTasks))

        }

        getTasks()

    }, [dispatch, request])

    const onSubmit = () => {
    }

    const deleteHandler = async (data) => {
        await fetch("api/task/delete",
            {
                method: "POST",
                body: JSON.stringify({_id: data._id}),
                headers: {'Content-Type': 'application/json'}
            })
    }

    const onKeyPressHandler = async (event) => {
        if (event.key === 'Enter') {
            const task = {
                name: value,
            }
            if (value.length > 3) {
                const response = await request("api/task/add", "POST", {...task, email})
                dispatch(addTask({...response}))
                toastMessage(response.message || 'Завдання створено', 'success')
                setValue('')
            } else {
                toastMessage('Завдання має замало символів', 'warning')
                setValue('')
            }
        }
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const changeFlag = async (data) => {
        console.log(data);
        try {
            await fetch('api/task/change', {
                method: "POST",
                body: JSON.stringify({...data}),
                headers: {'Content-type': 'application/json'}
            })
            dispatch(changeStatus(data))
            toastMessage('Завдання виконано', 'dark')
        } catch (e) {
            toastMessage(e.message || 'Щось пішло не так!', 'warning')
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
                    <ul className='content__list'>
                        {
                            list.map(element => <li key={element._id}>
                                <div
                                    className={`${element.status ? 'line-through' : null}`}>{element.name}</div>
                                <div className="content__btns">
                                    <input
                                        type="checkbox"
                                        onClick={() => changeFlag(element)}
                                        disabled={element.status}
                                        defaultChecked={element.status}
                                    />
                                    <div className="content__delete"
                                         onClick={() => {
                                             toastMessage('Task Delete', 'success')
                                             dispatch(removeTask(element.name))
                                             deleteHandler(element)
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
