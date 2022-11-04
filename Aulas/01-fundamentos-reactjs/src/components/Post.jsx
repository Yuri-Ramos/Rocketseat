import styles from './Post.module.css';


export function Post() {
return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/Yuri-Ramos.png" />
                </div>
                <div className={styles.authorInfo}>
                    <strong>
                      Yuri Ramos
                    </strong>
                    <span> Developer BackEnd</span>
                </div>
                <time dateTime="2022-05-11 08:13:30"> Publicado há 1h</time>
        </header>
                <div>
            <p>Fala galera </p>
           <p> acabei de subir um projeto no meu portifa é um projeto que fiz no NLW Return</p> 
           <p> sajhdiusahidusa</p>
           <p> isjahduisahidusiauhdihsaid</p>
           <p> Yuri.design/yurizin</p>

 #novoprojeto #nlw #rocketseat
                </div>

        </article>
)
}