import ParticlesBg from "particles-bg"
import React from 'react';
import './App.css';
import Headshot from "./headshot/headshot.jpg";


import NavBar from "./Components/NavBar/Navbar";






// import Header from './Components/Header/Header';

//BUTTON
function MyButton(){
  return(
      <button> This works nicely</button>  
  )
}
//User
const user ={
 name: "Ty Carlton",
  imageSize:300,
  
}





//LOGIN just leaving this here for my notes



//renders the application
export default function App() {
  return (
    <div className="content">
      
      <ParticlesBg type="cobweb" color="purple" bg={true} />
      <h1>{user.name}</h1>
      <img
        className="headshot"
        src={Headshot}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
          
        }}
      />
    <NavBar/>
      
      
      <MyButton />
      <p>
        Welcome to my new website.
        <div>
          I have been learning how to program for the past few months now and I am excited to continue my journey.
        </div>
      </p>
    </div>
  )
      }
