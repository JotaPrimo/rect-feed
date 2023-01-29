import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/63259982?v=4" alt="" />
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
        </article>
    );
} 