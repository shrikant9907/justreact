import './App.scss';

function App() {
  const appEnv = process.env.REACT_APP_ENV;
  return (
    <div className="react-app">
        React Project Initial Setup
        <div className="version">{appEnv}</div>
    </div>
  );
}

export default App;
