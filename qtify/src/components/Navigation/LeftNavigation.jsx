import React from "react";
import leftNavigation from "../../assets/left-navigation.png";
const LeftNavigation=({onClick})=>{
return( <img src={leftNavigation} alt="logo" width={40}    onClick={onClick}  />)
}
export default LeftNavigation;