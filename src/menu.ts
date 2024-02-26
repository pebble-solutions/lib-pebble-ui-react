import { Settings, User, SystemShut, Home} from 'iconoir-react';

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
    },{
        label : "Accueil",
        target : "/settings",
        icon : Home
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      },{
        label : "Accueil",
        target : "/settings",
        icon : Home
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      },{
        label : "Accueil",
        target : "/settings",
        icon : Home
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      },{
        label : "Accueil",
        target : "/settings",
        icon : Home
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      },{
        label : "Accueil",
        target : "/settings",
        icon : Home
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      },{
        label : "Accueil",
        target : "/settings",
        icon : Home
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      },{
        label : "Accueil",
        target : "/settings",
        icon : Home
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      }, 
      {
        label : "paramètres",
        target : "/settings",
        icon : Settings
      },{
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
      icon :  SystemShut,
      className: "disconnect"
    }
  ]

  export function getMenuItems() {

    return menuItems
  }

  export function getMenuItemsModal() {

    return menuItemsModal
  }