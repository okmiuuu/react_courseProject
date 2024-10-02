import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/header.css'
import Biography from './Biography';
import GaleryWithWorks from './GaleryWithWorks'
import Exhibitions from './Exhibitions';
import Shape from './Shape';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenus } from '../store/menuSlice';

function Header() {
    const person = useSelector((state) => state.person.value)
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const[openNavigation, setOpenNavigation] = useState(window.innerWidth > 426)
    const [showShape, setShowShape] = useState(false)

    const avaibleLanguages = Object.keys(i18n.options.resources);

    function goToMain() {
        dispatch(closeMenus());
    }

    function setNavOnPhones() {
        setOpenNavigation(!openNavigation);
        setShowShape(!showShape);
    }

    function changePage() {
        window.scrollTo(0,0);
        if(window.innerWidth < 426) {
            setShowShape(!showShape);
        }
    }

    return (
        <Router>
        <nav className="main-navigation">
        <ul className={person + "-colors menu-box"}>
            <li className="menu-cell main-menu-cell">
                <svg className="svg-icon" viewBox="0 0 20 20" onClick={goToMain}>
                    <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
                </svg>
            </li>
            <li className="inside-menu">
                <ul className="for-phone" onClick={() => setNavOnPhones()}>
                    <li>
                        <svg className="svg-icon" viewBox="0 0 20 20">
                            <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298"></path>
                        </svg>
                    </li>
                </ul>
                {
                    openNavigation 
                    &&
                    <ul className="for-pc" onClick={() => window.innerWidth < 426 && setOpenNavigation(!openNavigation)}>
                        <li className="menu-cell inside-menu-cell" onClick={() => changePage()}><Link to="/biography"><Trans i18nKey="general.biographyMenu"></Trans></Link></li>
                        <li className="menu-cell inside-menu-cell" onClick={() => changePage()}><Link to="/"><Trans i18nKey="general.worksMenu"></Trans></Link></li>
                        <li className="menu-cell inside-menu-cell" onClick={() => changePage()}><Link to="/exhibitions"><Trans i18nKey="general.exhibitionsMenu"></Trans></Link></li>
                    </ul>
                }
            </li>
            <li className="menu-cell main-menu-cell">
                {avaibleLanguages.map((item, index) => (
                    <span 
                    id={item.toUpperCase()}
                    className={i18n.language == item ? "lang-switcher lang-now" : "lang-switcher"} 
                    key={index}
                    onClick={() => i18n.changeLanguage(item)}>
                    {item.toUpperCase()}
                    </span>
                )
                )}
            </li>
        </ul>
        {showShape && <Shape closeShape={setNavOnPhones}/>}
    </nav>
    <Routes>
        <Route exact path="/" element={<GaleryWithWorks/>} />
        <Route path="/biography" element={<Biography refForPic={"pics/" + person + "/biographyPhoto.png"}/>} />
        <Route path="/exhibitions" element={<Exhibitions/>} />
    </Routes>
    </Router>
    )
}

export default Header