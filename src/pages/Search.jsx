import React from "react"
import ContentLeftOne from "../components/Content/ContentLeftOne"
import ContentLeftTwo from "../components/Content/ContentLeftTwo"
import MainContent from "../components/Content/MainContent"

const Search = () =>{

    return(
        <div className="bg-black h-screen">
            <div className="grid grid-rows-2 grid-flow-col gap-2 px-2 pt-2">
                <ContentLeftOne/>
                <ContentLeftTwo/>
                <MainContent/>
            </div>
        </div>
    )
}

export default Search