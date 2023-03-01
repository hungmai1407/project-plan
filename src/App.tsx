import { Outlet } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div id='root'>
      <div id="sidebar">
        <div>Dash Board</div>
        <div>Gantt Chart</div>
      </div>
      <div id='sideview'>
      </div>
    </div>
  );
}

export default App;
