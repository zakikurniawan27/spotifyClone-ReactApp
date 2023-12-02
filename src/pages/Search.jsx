import React from "react"
import ContentLeftOne from "../components/content/ContentLeftOne"
import ContentLeftTwo from "../components/content/ContentLeftTwo"
import MainContent from "../components/content/MainContent"

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