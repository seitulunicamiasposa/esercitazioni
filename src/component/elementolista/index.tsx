import React from "react";
import './styles.css';


type TListElement = {
    title: string
}

function ElementList(props: TListElement) {
    return (
        <div className="element">
           <li>{props.title}</li>
        </div>
    )
}

export default ElementList;