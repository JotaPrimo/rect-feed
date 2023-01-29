import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

function App() {

  return (
    <div>

      <Header />
      <Post 
        author="Diego fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aitae atque cupiditate, maxime, ut obcaecati veritatis deleniti et."
      />
      <Post 
        author="Jota Santos" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aitae atque cupiditate, maxime, ut obcaecati veritatis deleniti et."
      />      
    </div>
  )
}

export default App

