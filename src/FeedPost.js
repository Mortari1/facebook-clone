import espaco from "./resources/space_facebook.jpg"
import {BiWorld} from "react-icons/bi"
function FeedPost(props){
    return(
        <div className='feedPosts'>
        <div className='feedPostSingle'>
          <div className='feedPost__profile'>

            <img src={espaco}></img>
            <span>{props.nome}<br/>
            <span>{props.horario} <BiWorld id='worldIcon'/></span>
            </span>

          </div>
          <div className='feedPost__content'>
            <p>{props.conteudo}</p>
              <img src={props.img}/>

          </div>
        </div>
      </div>
    )
}

export default FeedPost