import { useState } from "react"
import Convert from "./Convert";
import Dropdown from "./Dropdown"

const options = [
    {
        label: "Afrikaans",
        value:"af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
]
const Translate = ()=> {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')
   return <div>
       <div className="ui form">
            <div className="field">
                <label>Enter a text </label>
                <input value={text} onChange={ (e)=> setText(e.target.value) } />
            </div>
       </div>
        <Dropdown 
            options={options} 
            selected={language} 
            onSelectChange={setLanguage} 
            label="Select a language" 
        />
        <h3 className= "ui header">Output</h3>
        <Convert text={text} language={language} />
    </div>
}

export default Translate;