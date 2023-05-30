
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import Appscreen from "./components/appscreen";
import Mainscreen from "./components/mainscreen";


export default function App(){

return(
  <>
 
 <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Applayout/>} >
<Route index element={<Appscreen/>}/>
<Route path="/pokemon" element = {<Mainscreen/>}/>



      </Route>

    </Routes>
  </BrowserRouter>
  </>
)

}