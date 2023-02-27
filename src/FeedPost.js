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
              <img src='https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/01/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e-1.jpg'/>

          </div>
        </div>
      </div>
    )
}

export default FeedPost