import React from 'react';
import '../css/mainPage.scss';
import logotype from '../images/logotype.png'
import {useSelector, useDispatch} from 'react-redux';
import {addClass} from "../reducer/actions"
import {NavLink} from "react-router-dom";

export const NavigationBar = () => {

    const value = useSelector((state) => state.toggleClass.changeClass)
    const dispatch = useDispatch()


    return (
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <div className="header__logo">
                            <img src={logotype} alt=""/>
                        </div>

                        <div onClick={() => {
                            dispatch(addClass(value))
                        }} className={`header__burger ${value ? "active" : 'null'}`}>
                            <span> </span>
                        </div>

                        <nav className={`header__menu ${value ? "active" : 'null'} `}>
                            <ul className="header__list">
                                <li><NavLink exact to="/" className="header__link">Home</NavLink></li>
                                <li><a href='#popup' className="header__link popup__link">About</a></li>
                                <li><NavLink exact to='contacts' className="header__link">Contacts</NavLink></li>
                                <li><NavLink exact to="exit" className="header__link">Exit</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>


            <div id='popup' className="popup">
                <div className="popup__body">
                    <div className="popup__content">
                        <a href="#popou" className="popup__close">X</a>
                        <div className="popup__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolores
                                explicabo fuga iusto maiores quasi repellat sequi similique soluta? Alias architecto
                                beatae commodi deserunt dolor doloribus hic quam, reprehenderit?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
