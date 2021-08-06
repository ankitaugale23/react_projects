import React from "react";
import Accordion from "./components/Accordion";

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

export default ()=> {
   return <div>
       <Accordion items={items} />
   </div>
}