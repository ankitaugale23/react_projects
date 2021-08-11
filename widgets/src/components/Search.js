import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    const list = results.map( (item)=> {
        return <div key={item.pageid} className="item">
            <div className="right floated content">
                <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${item.pageid}`}
                >
                    Go
                </a>
            </div>
            <div className="content">
                <div className = "header">
                {item.title}
                 </div>
            </div>
            
           <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>
        </div>
    })

    useEffect( ()=> {
        const search = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search);
        }
        if(term)
        {
            search();
        }
        else
        {
            const timeOutId = setTimeout(()=>{
                if(term)
                search();
            }, 500);
            
           return () => {
               clearTimeout(timeOutId);
           }
        }
       
    },
        [term]    );
    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input 
                value={term}
                onChange={e => {
                    setTerm(e.target.value)
                }}>
                </input>
                <div className="ui celled list">
                    {list}
                </div>
            </div>
        </div>
    )
}

export default Search;