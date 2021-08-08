import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
    {
        title: "What is the color of sky?",
        content: "Blue"
    },
    {
        title: "What is the color of Parrot?",
        content: "Green"
    },
    {
        title: "what is the color of crow?",
        content: "Black"
    }
]

const colors = [
    {
        label:"It is a red color",
        value:"red"
    },
    {
        label:"This is a green color",
        value:"green"
    },
    {
        label:"This is a shade of blue",
        value:"blue"
    }
]



export default ()=> {

    const [selected, setSelected] = useState(colors[0]);
    const [toggle, setToggle] = useState(true);
   return (<div>
       {/* <Accordion items={items} /> */}
       {/* <Search /> */}

       <button onClick={()=> {setToggle(!toggle)} }>Toggle</button>

       { toggle ? (<Dropdown 
       selected={selected}
       onSelectChange={setSelected}
       options={colors}
       />) : null}
   </div>)
}