import ButtonHome from '../button/buttonHome'
import ButtonSearch from "../button/buttonSearch"

const ContentLeftOne = () => {


    return(
        <div className="grid grid-rows-2 h-full bg-zinc-900 rounded-md">
            <ButtonHome />
            <ButtonSearch/>
        </div>
    )

}

export default ContentLeftOne