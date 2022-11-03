import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './Post';

import { Sidebar } from './components/Sidebar';
import './global.css';
export function App() {
  

  return (
    <div>
      <Header/>
       <div className={styles.wrapper}>
       <Sidebar/>
        <main> 
         <Post   
              author="YURI RAMOS"
              content="loremiasuhdfiusahdiusahdiuhsaiudhiusahdiuhsaiudhisuahdiusasiuaduisahi"
           />
           <Post
       
             author="Yago RAMOS"
             content="loremiasuhdfiusahdiusahdiuhsaiudhiusahdiuhsaiudhisuahdiusasiuaduisahi"
       
              />
            <Post/>
            <Post/>
            <Post/>
           <Post/>
      
          </main>
        </div>
      </div>
  )
}










// componente no React nada mais é que uma function que retorna um html e é identificado com JSX (Js mais XML(html))