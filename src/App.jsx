import MainPic from './components/MainPic'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/variables.css'
import './styles/MainPage.css'
import '/i18n'
import { useSelector } from 'react-redux';

function App() {
  const showMenus = useSelector((state) => state.showMenus.value);
  const person = useSelector((state) => state.person.value);

  return (

    <div className={person + '-colors all-content-container'}>
      {showMenus && <Header/>}
      
      {
      !showMenus
      &&
      <div className="main-container">
        <MainPic refForPic="pics/iraida/0026.JPG" name="iraida"/>
        <MainPic refForPic="pics/genadz/0007.png" name="genadz"/>
      </div>
      }
      {showMenus && <Footer person={person}/>}
    </div>
  )
}

export default App
