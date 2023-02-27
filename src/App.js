import './App.css';
import Header from "./Header"
import Stories from "./Stories"
import Feed from "./Feed";
import FeedPost from './FeedPost.js';

function App() {
  return (
    <div className="App">

        <Header/>
        <Stories/>
        <Feed/>
        
        <FeedPost nome="Henrique Mortari" conteudo="Jogo novo da piazada" 
        horario="13:30"/>
       
       
    </div>
  );
}

export default App;
