import Led from './components/Led'
import './App.css';

function App() {

  const cancelar = (obj) =>{
    return obj.preventDefault()
  }

  return (
    <>
      <Led />
      <a
        href='https//:youtube.com'
        target='_blank'
        onClick={(e) =>cancelar(e)}
      >
        Youtube 
      </a>
    </>    
  );
}

export default App;
