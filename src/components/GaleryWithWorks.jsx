import { useState, createContext, useEffect } from 'react'
import WorkElem from "./WorkElem"
import WindowForWork from "./WindowForWork"
import { WorksObjIraida, WorksObjGenadz } from '../../public/workObj';
import Shape from './Shape';
import { useSelector } from 'react-redux';
import '../styles/galery.css'
export const WindowContext = createContext()
export const ChosenWorkContext = createContext()

function GaleryWithWorks() {
    const person = useSelector((state) => state.person.value);

    const [backendData, setBackendData] = useState([{}]);
    let workObj;
    if (person == "iraida") { workObj = "WorksObjIraida"}
    else { workObj = "WorksObjGenadz" }

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
    const [showTheWindow, setShowTheWindow] = useState(false);
    const [chosenWork, setChosenWork] = useState(null);
    const [showShape, setShowShape] = useState(false);

    function closeWindow() {
      setShowTheWindow(false);
      setShowShape(false);
    }

    return (
        <ChosenWorkContext.Provider value={[chosenWork, setChosenWork]}>
          <WindowContext.Provider value={[showTheWindow, setShowTheWindow, closeWindow, setShowShape]}>
          <div>
            <div id="galery" className={person + '-colors'}>
              { ( backendData[workObj] === undefined) ? (
                    <h1>LOADING</h1>
                ) : (
                    backendData[workObj].map((item, index) =>
                    <WorkElem work={item} key={index}/>)
                )}
            </div>
            <div className='container-for-window'>
            {showTheWindow && <WindowForWork/>}
            </div>
          </div>
          {showShape && <Shape closeShape={closeWindow}/>}
          </WindowContext.Provider>
    </ChosenWorkContext.Provider>
    )
}

export default GaleryWithWorks;
