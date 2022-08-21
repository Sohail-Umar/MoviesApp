import React from "react";
import "../App.css"
import ArrayOfData from "./ArrayOfData";

function SideContainer(props) {

    const columnNames = ["All Movies", "Action", "Comedy", "Thriller"]


    return (
        <>
            <div className="side-genre">
                {
                    columnNames.map((value) => {

                        return (<p onClick={() => {
                            props.setgenre(value)

                        }}>{value}</p>)
                    })
                }
            </div>
        </>
    );
}

export default SideContainer;