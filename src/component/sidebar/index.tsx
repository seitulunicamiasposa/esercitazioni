import React, { useContext, useEffect, useState } from "react";
import './styles.css';
import ElementList from "../elementolista";
import TNote from "../../types/commontypes";
import{ AppContext, IAppContext } from "../../providers/AppContext";


function Lista() {

    const {jsonData, setSelectedNote} = useContext(AppContext) as IAppContext

    return (
        <div className="sidebar">
            <h2>lista note</h2>
        <ul id="note-list">
            {jsonData && jsonData.map((item: TNote, index: number) => (
                <div key={index} onClick={() => setSelectedNote(item)}>
            <ElementList title={item.title} />
               </div>
            ))}
        </ul>
        </div>
    )
}

export default Lista;