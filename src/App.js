import './App.css';
import Header from "./Header"
import Stories from "./Stories"
import {useState, useEffect} from 'react';
import Feed from "./Feed";
import FeedPost from './FeedPost.js';

import {db,functions} from './firebase';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(function(doc){
        
        return {info:doc.data()}
      }));
    })
  },[])
  return (
    <div className="App">
        
        <Header/>
        <Stories/>
        <Feed/>
        {
          posts.map((val)=>{
            return(
              <FeedPost nome={val.info.nome} conteudo={val.info.conteudo} img={val.info.img}
              horario="13:30"/>
            )
          })
        }
      
       
       
    </div>
  );
}

export default App;
