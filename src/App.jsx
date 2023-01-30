import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JotaPrimo.png',
      name: 'Jota Santos',
      role: 'Dev Web',
    }, 
    content: [
      { type: 'pharagraph'},
      { type: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using' },
      { type: 'link', content: 'gestald118@gmail.com'}
    ],
    publishedAt: new Date('2022-05-10 20:00:54')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/JotaPrimo.png',
      name: 'Jota Santos',
      role: 'Dev Web',
    }, 
    content: [
      { type: 'pharagraph'},
      { type: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using' },
      { type: 'link', content: 'jessicaHelena@gmail.com'}
    ],
    publishedAt: new Date('2022-05-10 20:10:36')
  }
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />;
          }) }
        </main>
      </div>
    </div>
  );
}

export default App;
