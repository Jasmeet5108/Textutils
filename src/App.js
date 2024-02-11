import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState()

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#07144c'
      showAlert('Dark Mode Enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')

    }
  }
  return (
    <>
      <Navbar title='TextUtils' AboutText='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading='Enter the text to analyze' showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
