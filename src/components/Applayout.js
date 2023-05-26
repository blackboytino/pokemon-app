import React from "react";
import Sidebar from "./sidebar";

import { Outlet } from "react-router-dom";

export default function Applayout(){
    return(
        //the pokemon list goes in sidebar and pokemon stats in mainscreen
        <>
        
<div id="applayout">
<Sidebar/>
<Outlet/>
</div>
        </>
    )
}