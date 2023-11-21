import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './style/style.css'

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
  
}

export default App;
