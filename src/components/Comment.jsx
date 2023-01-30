import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/63259982?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jota Santos</strong>
                            <time title='11 de maio as 8:13' dateTime='2022-05-11'>Cerca de uma hora atras</time> 
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>TEsasdsa JKIJpoiposadasdsad</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Apludir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}