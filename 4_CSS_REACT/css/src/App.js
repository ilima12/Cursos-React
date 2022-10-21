import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState ("Matheus");
  const redtitle = true;

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
       {/*classe dinâmica*/}
       <h2 className={redtitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/*css modules*/}
      <Title/>
      <h2 className="my_title">testando</h2>
    </div>
  );
}

export default App;
