import logo from './logo.svg';
import './App.css';
function App(props) {
  const man = props.man
  return (
      <ol>
      {man.map((x) => (
        <li key={x.name}>{x.name}</li>
      ))}
    </ol>
  )
}

export default App;

