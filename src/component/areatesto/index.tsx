import React, { useContext, useEffect, useState } from "react";
import './styles.css';
import TNote from "../../types/commontypes";
import { AppContext, IAppContext } from "../../providers/AppContext";

type TNotepad = {contenuto : string}

function TextArea(props: TNotepad) {

const [contState, setContState] = useState<string>('');
const [titleState, setTitleState] = useState<string>('');

const {jsonData, setJsonData, selectedNote, setSelectedNote} = useContext(AppContext) as IAppContext

let controllo = true; 

/*function showHeader(show: boolean) {
    if(controllo === true) {
        return  (<div className="header">
                    <h1>Text Area</h1>
                </div>)
    } else {
        return null;
    }
}
ALTERNATIVA
let valore = true
/*function showHeader(valore) {
    if(valore === true) {
        return  (<div className="header">
                    <h1>Text Area</h1>
                </div>)
    } else {
        return null;
    }
}
*/

/* API GET 
useEffect(() => {
    fetch('https://')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}, [])
*/
 
function addCont(input:string) {
    setContState(input); //qui gli passo il valore     
}

function save() {
    if(jsonData){
        const obj = {
            userid: 99,
            id: jsonData?.length,
            title: titleState,
            body: contState
        }
        let data = jsonData
        data.push(obj)
        setJsonData([...data])
    }
}

function showButton() {
    if(contState && contState.length >= 10) {
        return (
        <button id="save" onClick={() => save()}>Save</button>
    )
    } else {
        return null;
    }
}

console.log(contState);

useEffect(() => {
    if(selectedNote?.body)
        {
            setContState(selectedNote?.body);
        }
}, [selectedNote])

useEffect(() => {
    if(selectedNote?.body)
        {
            setTitleState(selectedNote.title)
        }
}, [selectedNote])

    return (
        <div className="textArea">
            {controllo && (
                    <div className="header">
                    <h1>Text Area</h1>
                </div>
            ) /*showHeader(true)*/}
        <textarea className="titolo" id="titolo" placeholder="Inserisci titolo..." value={titleState} onChange={(event) => setTitleState(event.target.value)}></textarea>   
        <textarea className="editor" id="editor" placeholder="Scrivi qui..." value={contState} onChange={(event) => addCont(event.target.value)}>{props.contenuto}</textarea> 
         {showButton()}
    </div>
    )
}

export default TextArea;
/*
ALTERNATIVA PER I CONTROLLI con lo useState:
const [controllo, setControllo] = useState<boolean>()

{controllo && (
    <button></button>
)}
*/

