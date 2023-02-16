import './App.css';
import Header from "./Header"
import Stories from "./Stories"
import Feed from "./Feed";
import espaco from "./resources/space_facebook.jpg"
import {BiWorld} from "react-icons/bi"

function App() {
  return (
    <div className="App">

        <Header/>
        <Stories/>
        <Feed/>
       
        <div className='feedPosts'>
          <div className='feedPostSingle'>
            <div className='feedPost__profile'>

              <img src={espaco}></img>
              <span>Henrique Mortari<br/>
              <span>4h <BiWorld id='worldIcon'/></span>
              </span>

            </div>
            <div className='feedPost__content'>
              <p>Jogo da piazada nova</p>
                <img src='https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/01/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e-1.jpg'/>

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
