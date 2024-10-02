import { Trans } from 'react-i18next';
import '../styles/firstPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { openMenus } from '../store/menuSlice';
import { selectPerson } from '../store/personSlice';

function MainPic({refForPic, name}) {
    
    const dispatch = useDispatch();
    function choosePerson(name) {
        dispatch(openMenus());
        dispatch(selectPerson(name));
    }
    
    return (
        <div className="main-block" onClick={() => choosePerson(name)}>
            <div className="box-img">
                <img src={refForPic} />
            </div>
            <div className={name + "-colors main-pic-name"}>
                <Trans i18nKey={name + ".name"}></Trans>
            </div>
        </div>
    )
}

export default MainPic;