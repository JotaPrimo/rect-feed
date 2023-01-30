import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/63259982?v=4" />
                    <div className={styles.authorInfor}>
                        <strong>Jota Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de maio as 8:13' dateTime='2022-05-11'>Publicado há uma hora</time>    
            </header>
            <div className={styles.content}>
                <p>It is a long established</p>  
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <p><a href="#">#novoprojeto</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deizxe seu comentario</strong>
                <textarea 
                    placeholder='Deixe um comentario'
                />
                <footer>
                    <button type="submit">Comentario</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
} 