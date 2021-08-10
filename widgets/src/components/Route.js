import { useEffect, useState } from "react";

const Route = ({path, component})=> {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const onLocationChange = ()=> {
        setCurrentPath(window.location.pathname);
    }
    useEffect(()=> {
        window.addEventListener("popstate",onLocationChange,true);

        return () => {
            window.removeEventListener("popstate",onLocationChange,true);
        }
    }, []);
    return currentPath === path ? 
        component : null;
}

export default Route;