import { Trans } from 'react-i18next';
import '../styles/mainPage.css'
import { useSelector } from 'react-redux';


function Biography({refForPic}) {
    const person = useSelector((state) => state.person.value);

    return (
        <div className={person + '-colors main-box-bio'}>
            <div>
                <h1 className="main-header"><Trans i18nKey={person + ".name"}></Trans></h1>
                <p className="main-text"><Trans i18nKey={person + ".biographytext"}></Trans></p>
            </div>
            <img className="pic-for-biography" src={refForPic} alt=""/>
        </div>
    )
}

export default Biography