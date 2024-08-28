import React from "react";
import rightNavigation from "../../assets/right-navigation.png";
const RightNavigation=({onClick})=>{
return( <img src={rightNavigation} alt="logo" width={40}    onClick={onClick} />)
}
export default RightNavigation;