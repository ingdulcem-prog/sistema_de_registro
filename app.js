 const inputAmigo =document.getElementById ("amigo");
  const ListaAmigos =[];
  const uListaAmigos = document.getElementById ("listaAmigos");
 
  fuction agregarAmigo () {
 listaAmigos.push (inputAmigo.value);

 uListaAmigos.innerHTML += '<li>${inputAmigo.value} </li>';
  }
  fuction sortearAmigo(){
    
  }
  const random =Math.floor(Math.random() * listaAmigos.length);
  Const amigoSecreto = listaAmigos [random];
  ulResultado.innerHTML ='<li>El amigo secreto es:${amigoSecreto}</li>';