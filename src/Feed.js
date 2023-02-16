import espaco from "./resources/space_facebook.jpg"
import { MdOutlinePhotoLibrary } from "react-icons/md";
import {BsEmojiLaughing} from "react-icons/bs"
import {AiFillVideoCamera} from "react-icons/ai"
function Feed (){
    return(
        <div className='feed'>

            <div className='feedForm'>
            <img src={espaco}/>
            <input type="text" placeholder='No que está pensando ?'/>
            </div>

            <div className='feedIcons'>
            <div className='iconSingle'>
                <AiFillVideoCamera />
                <span>Vídeo ao vivo</span>
            </div>

            <div className='iconSingle foto'>
                <MdOutlinePhotoLibrary />
                <span>Foto/Vídeo</span>
            </div>

            <div className='iconSingle emoji'>
                <BsEmojiLaughing />
                <span>Vídeo ao vivo</span>
            </div>

            </div>

        </div>
    )
    
}

export default Feed