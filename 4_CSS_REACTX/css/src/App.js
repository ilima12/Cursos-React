import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  const n = 15;
  const [name] = useState ("Matheus");


  return (
    <div className="App">
   {/*css Global*/}
   <h1>React com CSS</h1>
   {/*css de componente*/}
   <MyComponent />
   <p>Este também é do app.js</p>
   {/*Inline CSS*/}
   <p style={{color: "blue", padding: "25px", borderTop: "wpx solid red"}}>
    Este elemento foi estulizado de forma inline
   </p>
    {/*CSS Inline dinâmico*/}
    <h2 style={n < 10 ? {color: "purple" } : {color: "pink"}}>
      CSS dinâmico
    </h2>
    <h2 style={n > 10 ? {color: "purple" } : {color: "pink"}}>
      CSS dinâmico
    </h2>
    <h2
      style={
        name === "Matheus"
       ? {color: "green", backgroundColor: "#000"}
       : null} > 
       Teste Nome
       </h2>
      
    </div>
  );
}

export default App;
