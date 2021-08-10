import React from "react";

const Link  = ({href,classname,children})=> {
    const onClick = (event)=> {
        if(event.metaKey || event.ctrlKey)
            return;

        event.preventDefault();
        window.history.pushState({},'',href); //just updating the url and not refreshing the page

        const NavEvent =new PopStateEvent('popstate');
        window.dispatchEvent(NavEvent);
    }
    return <a 
    className={classname} 
    href={href}
    onClick={onClick}>
        {children}</a>
}

export default Link;