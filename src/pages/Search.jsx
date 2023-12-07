import React from "react"
import ContentHome from "../components/Section/ContentHome"
import ContentCollect from "../components/Section/ContentCollect"
import MainContent from "../components/Section/MainContent"

const Search = () =>{

    return(
        <div className="bg-black h-screen">
            <div className="grid grid-rows-2 grid-flow-col gap-2 px-2 pt-2">
                <ContentHome/>
                <ContentCollect/>
                <MainContent/>
            </div>
        </div>
    )
}

export default Search