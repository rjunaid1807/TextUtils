import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //whether mode is light state or not
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  // const toggleMode = ()=> {
  //   if (mode ==='dark'){
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //   } else{
  //     setMode('dark')
  //     document.body.style.backgroundColor = 'rgb(2 30 52)';
  //   }
  // }
  const lightMode = ()=> {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    } 
  
  const blueMode = ()=> {
    setMode('dark')
    document.body.style.backgroundColor = 'rgb(2 30 52)';
  }

  const greenMode = ()=> {
    setMode('dark')
    document.body.style.backgroundColor = '#071407';
  } 


  return (
    
    <>
      <Navbar title = "TextUtils" aboutText = "About Us" mode = {mode} lightMode = {lightMode} blueMode = {blueMode} greenMode = {greenMode}/>
      <Alert alert = {alert}/>
      <TextForm showAlert = {showAlert} heading = "Text goes here" mode = {mode}  />
      
    </>
  
  );
}

export default App;
