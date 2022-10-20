import React,{useState} from 'react';
import Menu from './Components/Menu.js';
import MenuApi from './Components/MenuApi.js';
import Navbar from './Components/Navbar.js';
const uniqueList = [
  ...new Set(
    MenuApi.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];




function App() {
  const[menuList,setMenuList]=useState(MenuApi);
  const filterSelection=(category)=>{
    if(category==="All"){
      setMenuList(MenuApi);
      return;
    }
  const updatedList=MenuApi.filter((currElement)=>{
    return currElement.category===category;
  });
  setMenuList(updatedList);
      
  }
  return (
    <>
    <Navbar filter={filterSelection} unique={uniqueList}/>
     <Menu menu={menuList}/>
    </>
  );
}

export default App;
