import './App.css';
import { Chat } from './Layouts/Chat/Chat';
import { Sidebar } from './Layouts/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
