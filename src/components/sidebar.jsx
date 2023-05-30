
import React from "react";
import pokeball from "../images/pokeball.png"



export default function Sidebar(){

    return( 
        <>
<div id="sidebar">
<div id="searchbox-div">
<input type="searchbox" id="searchbox" placeholder="Search"/>
<img src={pokeball} alt="" id="pokeball"/> 
</div>




<Sidebar/>

</div>
        </>
    )

}