import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';
export function App() {
  

  return (
    <div>
      <Header/>
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
      
      </div>
  )
}










// componente no React nada mais é que uma function que retorna um html e é identificado com JSX (Js mais XML(html))