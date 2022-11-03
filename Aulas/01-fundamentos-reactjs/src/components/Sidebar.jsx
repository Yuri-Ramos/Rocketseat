import styles from './Sidebar.module.css';



export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

        <img className={styles.cover} src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"/>
        <div className={styles.profile}> 
        <strong> Yuri Ramos</strong>
        <span>Developer Backend</span>
        </div>

        <footer> 
            <a href="#"> Editar seu Perfil </a>
        </footer>
        </aside>

    );

}