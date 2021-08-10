import { useEffect,  useRef, useState } from "react";

const Dropdown = ({options,selected, onSelectChange,label})=> {

    const [open, setOpen] = useState(false);
    
    const ref =  useRef();

    
    useEffect( ()=> {

        const onBodyChange = (e)=> {

            if(ref.current.contains(e.target))
                return;  //if the item is clicked inside of dropdown then just return
    
            setOpen(false); //else close the dropdown
        }

        document.body.addEventListener("click", onBodyChange,true);

        return () => {
            document.body.removeEventListener("click", onBodyChange,true);
        };

    }, [])
    const colorsList = options.map( (color)=>{

        if(color.value === selected.value)
            return null;
        return <div key={color.value} 
         className="item"
         onClick={()=> { onSelectChange(color)}}
        >
            {color.label}
           
        </div>
    })

    return <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label"> {label} </label>
                <div 
                onClick={()=> setOpen(!open) }
                className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                     <i className="dropdown icon"></i>
                     <div className="text"> {selected.label} </div>
                     <div className={`menu ${open ? 'visible transition': ''}`}>
                         {colorsList}
                    </div>
               </div>
          </div> 
     
    </div>
}

export default Dropdown;