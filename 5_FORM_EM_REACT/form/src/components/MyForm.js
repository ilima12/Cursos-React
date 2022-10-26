 import "./MyForm.css"
 import {useState} from 'react'
 
const MyForm = () => {
  //3 - gerencmaneto de dados
  const [name,setName] = useState()
  const [email,setEmail] = useState()

  const handlename = (e) => {
    console.log("mudou o nome");
  }

  return (
    <div>
        {/* 1 - criação de form*/}
    <form>

    <div>    
        <label htmlFor='name'>Nome</label>
        <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleChange}/>
    </div>
    {/* 2 - label envolvendo input */}
    <label>
      <span>Email:</span>
      <input type="email" name="email" placeholder="Digite o seu e-mail"/>
    </label>
    <input type= "submit" value="enviar"/>
    </form>
    </div>

  )
}

export default MyForm