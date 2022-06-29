import {useState } from 'react';
import './App.css';
import RealMadrid from "./assets/real-madrid.png";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';
import TrueComponent from './components_aulacss/TrueComponent';
import Title from './components_aulacss/Title';

function App() {
  //const name = "Joao";
  const [userName] = useState("Maria");
  const cars = [
    {id: 1, brand: "Ferrari", color: "Yellow", newCar: false, km: 30000},
    {id: 2, brand: "Mercedes", color: "Cinza", newCar: true, km: 20000},
    {id: 3, brand: "Land Rover", color: "Verde", newCar: false, km: 14000},
    {id: 4, brand: "Volvo", color: "Branca", newCar: true, km: 7800}
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }
  
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {  
    setMessage(msg);
  }

  const pessoas = [
    {id: 1, nome: "João", idade: 16, profissao: "Engenheiro"},
    {id: 2, nome: "Maria", idade: 18, profissao: "Advogada"},
    {id: 3 ,nome: "João", idade: 35, profissao: "Programador"},
  ]

  // avançado em react
  // return (
  //   <div>
  //     <h1>Avançando em react</h1>
  //     {/* Imagem em /public */}
  //     <img src="/spfc.jpg" alt="spfc"></img>
  //     {/*Imagem em src/assets */}
  //     <div>
  //       <img src={RealMadrid} alt="real Madrid" />
  //     </div>
  //     <ManageData />
  //     <ListRender/>
  //     <ConditionalRender/>
  //     {/* props */}
  //     <ShowUserName name={userName}/> 
  //     {/* destructuring */}
  //     <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
  //     {/* reaproveitamento */}
  //     <CarDetails brand="Ford" km={3000} color="Vermelho" newCar={true}/>
  //     {/* loop em array de objetos */}
  //     {cars.map((car) => (
  //       <CarDetails key={car.id} brand={car.brand} km={car.km} newCar={car.newCar} color={car.color}/>
  //     ))}
  //     {/* fragment */}
  //     <Fragment propFragment="teste"/>
  //     {/* children */}
  //     <Container myValue="testemyValue">
  //       <p>Este é o conteúdo</p> 
  //       {/* Componente pai no componente filho */}
  //     </Container>
  //     <ExecuteFunction myFunction={showMessage}/>
  //     {/* state lift */}
  //     <Message msg={message}/> 
  //     {/* esses dois componentes se interajem com o state lift e uso de propertys */}
  //     <ChangeMessageState handleMessage={handleMessage}/> 
  //     {pessoas.map((pessoa) => (
  //       <UserDetails key={pessoa.id} user={pessoa}/>
  //     ))}
  //   </div>
  // );

  const n = 15;
  const [name] = useState("Jhonata");
  const redTitle = false;
  return (
    <div className="App">
      <h1>React com css</h1>
      <TrueComponent/>
      <p> Este é o paragrafo do css do pai App.js</p>
      <p  style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}> Elemento estilizado de forma inline</p>
      {/* Css Inline dinamico */}
      <h2 style={n < 10 ? ({color: "orange", fontWeight: "bolder"}) : ({color: "pink", fontWeight: "bolder"})}> CSS dinâmico</h2>
      <h2 style={name === "Jhonata" ? ({color: "orange", backgroundColor: "blue"}) : null}> Teste nome</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}> Este titulo vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title/>
    </div>
  )
}

export default App;
