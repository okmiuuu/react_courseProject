import { useTranslation, Trans } from 'react-i18next';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import '../styles/mainPage.css'

function Exhibitions() {
    const person = useSelector((state) => state.person.value);
    const [backendData, setBackendData] = useState([{}]);
    let mainObject;
    if (person == "iraida") { mainObject = "exhibitionsObjIraida"}
    else { mainObject = "exhibitionsObjGenadz" }

    useEffect( () => {
        fetch("http://localhost:5000/api")
        .then(response => response.json()
        ).then(data => {
            setBackendData(data);  
        })
        .catch(error => {
          console.log(error);
        });

    }, [])

    console.log(backendData[mainObject])

    const { i18n } = useTranslation();
    const activeLanguage = i18n.language.toUpperCase();

    return (
        <div className={person + '-colors main-box-bio'}>
            <h1 className="main-header-exhibitions" data-i18n="mainExhibitions"><Trans i18nKey="general.mainExhibitions"></Trans></h1>
            <article className="list-of-exhibitions" id="listOfExhibitions">
                { ( backendData[mainObject] === undefined) ? (
                    <h1>LOADING</h1>
                ) : (
                    backendData[mainObject].map((item, index) =>
                        <p key={index}>
                            <span className="year-bold">{item.year}</span> - {item["name" + activeLanguage]}
                        </p>)
                )}
            </article>
        </div>
    )
}

export default Exhibitions