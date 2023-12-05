import React from "react"
import SectionLeftOne from "../components/Content/SectionLeftOne"
import SectionLeftTwo from "../components/Content/SectionLeftTwo"
import SectionMain from "../components/Content/SectionMain"

const Search = () =>{

    return(
        <div className="bg-black h-screen">
            <div className="grid grid-rows-2 grid-flow-col gap-2 px-2 pt-2">
                <SectionLeftOne/>
                <SectionLeftTwo/>
                <SectionMain/>
            </div>
        </div>
    )
}

export default Search