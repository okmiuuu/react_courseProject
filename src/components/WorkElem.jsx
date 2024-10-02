import { useContext, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { WindowContext } from './GaleryWithWorks';
import { ChosenWorkContext } from './GaleryWithWorks';

function WorkElem({ work }) {
  const [chosenWork, setChosenWork] = useContext(ChosenWorkContext);
  const [showTheWindow, setShowTheWindow, closeWindow, setShowShape] = useContext(WindowContext);

  const { i18n } = useTranslation();
  const activeLanguage = i18n.language.toUpperCase();

  function setData() {
    setShowTheWindow(true);
    setChosenWork(work);
    setShowShape(true);
  }

  return (
    <div className='work-element' onClick={setData}>
      <div style={{ backgroundImage: "url(" + work.ref + ")" }}></div>
      <h3>{work["name" + activeLanguage]}</h3>
    </div>
  );
}

export default WorkElem;