import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publisedAt, content }) {
  const publisedDateFormatted = format(
    publisedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publisedDateRelativeNow = formatDistanceToNow(publisedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfor}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title="{publisedDateFormatted}"
          dateTime="{publisedAt.toISOString()}"
        >
          {publisedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          }else if (line.type === "link") {
            return <p><a href="#">{line.content}</a></p>;
          }
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deizxe seu comentario</strong>
        <textarea placeholder="Deixe um comentario" />
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
