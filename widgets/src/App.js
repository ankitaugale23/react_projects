import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

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



const App =  ()=> {

    const [selected, setSelected] = useState(colors[0]);
    
   return (<div>
       <Header />
      <Route path="/" component= {<Accordion items={items} />} />
      <Route path="/search" component= {<Search  />} />
      <Route path="/list" component= {<Dropdown options ={colors} 
                                        selected={selected}
                                         onSelectChange={setSelected}
                                         label="Select a color"/>} />
      <Route path="/translate" component= {<Translate />} />
   </div>)
}

export default App;