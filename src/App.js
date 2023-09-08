import './App.css';
import Logo from "./img/sala-cinema.jpg";

function App() {

  const estiloDoFundo = {
    backgroundImage: `url(${Logo})`, 
    backgroundSize: 'cover',                 
    backgroundRepeat: 'no-repeat',
             

  };
  
  return (
    <div className='main' style={estiloDoFundo}>
      <div className='boxForm'>
        <form className='form'>
          
          <input type='text' id='name' placeholder='Filme'></input>
          
          <input type='text' id='genero' placeholder='genero'></input>
          
          <input type='text' id='horario' placeholder='Horario'></input>
         
          <input type='text' id='data' placeholder='data'></input>
        
          <input type='text' id='local' placeholder='local'></input>
          
        </form>
        <button className='button'>
            Create
          </button>
      </div>
 
    </div>
  );
}

export default App;
