import React from "react";
import ReactDOM from "react-dom/client"
import { pay } from "../utils/constants";
// react functional components
// header components coding starts here
//react can fast our code to run smmothly in the browser
const AppLayout = () =>{
return(
    <div className="app">
     <h2>This is the code i am writing the code</h2>
     {pay}
     <br></br>
     <button className="my-btn" onClick={()=>{console.log("this button wsaa clicxked by you")}}>Click here</button>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)