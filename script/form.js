import {inscricaoAoClube} from "./firebase/clubd&d.js" 
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const level = document.getElementById("level")
const personagem = document.getElementById("personagem")
const btn = document.getElementById("btn")




btn.addEventListener("click", async() => {
  const inscricao = {
    nome: nome.value,
    email: email.value,
    level: level.value,
    personagem: personagem.value,
  }
 console.log(nome.value.length, email.value.length, level.value.length, personagem.value.length);
if(nome.value === "" || email.value === "" || level.value === "" || personagem.value === ""){
  alert("Preencha todos os campos")
}
else{
const inscricaoId = await inscricaoAoClube(inscricao)
  nome.value = "";
  email.value = "";
  level.value = "";
  personagem.value = "";
  alert("Inscrito com sucesso");
}
   
})
