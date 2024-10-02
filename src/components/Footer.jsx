import { useTranslation, Trans } from 'react-i18next';
import '../styles/footer.css'

function Footer({person}) {
    useTranslation();
    return (
        <footer className={person + "-colors main-footer"}>
        <h4><Trans i18nKey="general.contactWithUs"></Trans></h4>
        <div className='footer-pic-container'>
            <div className='pic-footer-container'>
                <a href="https://www.facebook.com/shutovsart">
                    <svg className="svg-icon pic-in-footer" viewBox="0 0 20 20">
                        <path fill="none" d="M17.675,0.62H2.327c-0.942,0-1.706,0.764-1.706,1.706v15.348c0,0.941,0.764,1.705,1.706,1.705h15.348c0.941,0,1.705-0.764,1.705-1.705V2.326C19.38,1.384,18.616,0.62,17.675,0.62 M18.526,17.674c0,0.471-0.381,0.852-0.852,0.852H2.327c-0.471,0-0.853-0.381-0.853-0.852V2.326c0-0.471,0.382-0.853,0.853-0.853h15.348c0.471,0,0.852,0.382,0.852,0.853V17.674zM10.849,7.975c0-0.345,0.035-0.531,0.565-0.531h0.709V6.162h-1.134c-1.364,0-1.844,0.642-1.844,1.721v0.834h-0.85V10h0.85v3.838h1.701V10h1.134l0.151-1.283h-1.285L10.849,7.975z"></path>
                    </svg>
                </a>
            </div>
            <h4 className='footer-caption-for-pic'>
                Facebook
            </h4>
        </div>
        <div className='footer-pic-container'>
            <div className='pic-footer-container'>
                <a href="https://www.instagram.com/ira_i_da_kukla/">
                    <svg className="svg-icon pic-in-footer" viewBox="0 0 20 20">
                        <path fill="none" d="M17.835,0.438H2.29c-0.954,0-1.727,0.773-1.727,1.727V17.71c0,0.954,0.773,1.728,1.727,1.728h15.545c0.954,0,1.728-0.773,1.728-1.728V2.165C19.562,1.211,18.789,0.438,17.835,0.438 M18.699,17.71c0,0.477-0.388,0.864-0.864,0.864H2.29c-0.477,0-0.863-0.388-0.863-0.864V2.165c0-0.477,0.387-0.863,0.863-0.863h15.545c0.477,0,0.864,0.387,0.864,0.863V17.71zM12.653,5.619H7.472c-0.954,0-1.728,0.773-1.728,1.728v5.182c0,0.954,0.773,1.728,1.728,1.728h5.182c0.954,0,1.728-0.773,1.728-1.728V7.347C14.381,6.393,13.607,5.619,12.653,5.619 M11.79,6.915h1.295V8.21H11.79V6.915z M10.062,8.21c0.954,0,1.728,0.773,1.728,1.727s-0.773,1.728-1.728,1.728c-0.954,0-1.727-0.773-1.727-1.728S9.109,8.21,10.062,8.21M13.518,12.528c0,0.478-0.388,0.863-0.864,0.863H7.472c-0.477,0-0.864-0.386-0.864-0.863V9.505h0.907C7.491,9.647,7.472,9.79,7.472,9.938c0,1.432,1.16,2.591,2.591,2.591c1.432,0,2.591-1.159,2.591-2.591c0-0.148-0.02-0.291-0.044-0.432h0.908V12.528z"></path>
                    </svg>
                </a>
            </div>
            <h4 className='footer-caption-for-pic'>
                Instagram
            </h4>
            {/* <h5 className="caption-to-pic-footer">okmiuu@gmail.com</h5> */}
        </div>
    </footer>
    )
}

export default Footer