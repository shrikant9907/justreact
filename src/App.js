import './App.scss';
import NavSidebar from './components/nav-sidebar/NavSidebar';

function App() {
  const appEnv = process.env.REACT_APP_ENV;
  return (
    <div className="react-app">
        <NavSidebar />
        React Project Initial Setup
        <div className="version">{appEnv}</div>
    </div>
  );
}

export default App;
