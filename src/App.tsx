import pebblelogo from './assets/pebble-logo.png'
import './App.css'
import './styles/navbarStyles.css'; 
import SidebarContainerPebble  from  './components/sidebarPebble/SidebarContainerPebble'
import { Settings, User, SystemShut, Home} from 'iconoir-react';


function App() {

  const menuItems = [
    {
      label : "Accueil",
      target : "/settings",
      icon : Home
    }, 
    {
      label : "paramètres",
      target : "/settings",
      icon : Settings
    }
  ]
  const menuItemsModal = [
    {
      label : "User ID",
      target : "/settings",
      icon : User
    }, 
    {
      label : "paramètres",
      target : "/settings",
      icon : Settings
    },
    {
      label : "Déconnexion",
      target : "/settings",
      icon :  SystemShut
    }
  ]
  return (
    <>
      <SidebarContainerPebble items={menuItems} itemsModal={menuItemsModal}/>
      <div>
        <a href="https://api.pebble.solutions" target="_blank">
          <img src={pebblelogo} className="pebblelogo" alt="pebblelogo" />
        </a>
      </div>
      <h1>API Pebble</h1>
    </>
  )
}

export default App
