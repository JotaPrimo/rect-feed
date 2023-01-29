import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post
            author="Diego fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aitae atque cupiditate, maxime, ut obcaecati veritatis deleniti et."
          />
          <Post
            author="Jota Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aitae atque cupiditate, maxime, ut obcaecati veritatis deleniti et."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
