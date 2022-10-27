 import "./MyForm.css"
 import {useState} from 'react'
 
const MyForm = ({user}) => {
  //3 - gerencmaneto de dados
  const [name,setName] = useState(user ? user.name : "");
  const [email,setEmail] = useState(user ? user.email : "");

  const handlename = (e) => {
    setName(e.target.value);
  };
  console.log(name);

  const handlemail= (e) => {
    setEmail(e.target.value)
  };
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando o formulário");
    console.log(name,email);
  
    // 7 - limpar form
    setName("");
    setEmail("");
  
  
  };
  
  return (
    <div>
      {/*5 - envio de form*/}
        {/* 1 - criação de form*/}
    <form onSubmit={handleSubmit}>

    <div>    
        <label htmlFor='name'>Nome</label>
        <input type="text" name="name" placeholder="Digite o seu nome" onChange={handlename} value = {name}/>
    </div>
    {/* 2 - label envolvendo input */}
    <label>
      <span>Email:</span>
      {/*simplificação de manupulação de states*/}
      <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={handlemail} value = {email}/>
    </label>
    <input type= "submit" value="enviar"/>
    </form>
    </div>

  )
}

export default MyForm