/* eslint-disable */
import 'antd/dist/antd.css';
import './App.css';
import Header from './Components/Header/Header';
import {Route} from'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Posts from './Components/posts/Posts';
import Contact from './Components/contact/Contact';
function App() {
  return (
   <div>
    <header><Header/></header>
    <main>
      
    <Route path="/Welcome" >
      <Welcome/>
    </Route>
    <Route path="/posts">
      <Posts/>
    </Route>
    <Route path="/Contact">
      <Contact/>
    </Route>
    
      {/* when the path is none other thane the above  */}
     <Route path="/" exact>
   <Welcome/>
     </Route>
    </main>
    
   </div>
  )
}

export default App;
