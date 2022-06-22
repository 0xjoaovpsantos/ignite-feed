import { Header } from './components/Header';

import styles from './App.module.css'
import './global.css';
import { Sidebar } from './components/Siderbar';

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <div>posts</div>
      </div>
    </div>
  )
}

export default App
