
import './App.css';
import headshot from "./headshot/headshot.jpg";
import logo from './logo/logo.png';
//BUTTON
function MyButton(){
  return(
      <button> This works nicely</button>  
  )
}

//User
const user ={
 name: "Ty Carlton",
  imageSize:200,
}



//Logo
function MyLogo(){
  return(
    <img alt="Logo" className='logo' src={logo}/>
  )
}

//ABOUT PAGE
function AboutPage(){
  return(
    <>
    <h1>About</h1>
    <p>Hello there.<br/ >How are you doing today? </p>
    </>
  )
}

//LOGIN just leaving this here for my notes

{/* <div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div> */}

//renders the application
export default function App() {
  return (
    <div> 
      <MyLogo />
<h1>{user.name}</h1>
<img className='avatar' src={headshot}alt={'Photo of ' + user.name} style={{
  width: user.imageSize,
  height:user.imageSize
}}
/>
     <h1>Welcome to my Page</h1>

    <MyButton/>
    <AboutPage/>
    {/* <Headshot/> */}
    <p> Welcome to my new website. 
      <div>I have been learning how to program for the past few months now
      and I am excited to continue my journey.</div>
    </p>
    </div>
    
  )
}

