import axios from "axios";
import { useEffect, useState } from "react"

const Convert = ({language, text})=>
{
    const [convertText, setConvertText] = useState('');
    const [deBouncedText, setDebouncedText] = useState(text);

    useEffect( ()=> {
        const timerId = setTimeout(()=>{
            setDebouncedText(text);
        },500)

        return ()=> {
            clearTimeout(timerId);
        }
    },[text])
    useEffect(
        ()=> {
            const makeRequest  = async () => {
               const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                    params : {
                        q: deBouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                })
                setConvertText(data.data.translations[0].translatedText);
            }
            makeRequest();
        },
        [deBouncedText,language]
    );
    return <div>
        <h1 className="ui header">{convertText}</h1>
    </div>
}

export default Convert