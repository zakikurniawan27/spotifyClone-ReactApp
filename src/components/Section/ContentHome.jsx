import ButtonHome from '../button/buttonHome'
import ButtonSearch from "../button/buttonSearch"

const ContentHome = () => {

    

    return(
        <div className="grid grid-rows-2 h-full bg-zinc-900 rounded-md">
            <ButtonHome />
            <ButtonSearch/>
        </div>
    )

}

export default ContentHome