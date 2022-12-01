import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Risk from './Risk'
import Portfolio from './Portfolio'
import Team from './Team'





const App = () => {
  const theme={
    colors:{
      white:'white',
      black:'black',
      text1:'#00568f',
      text2:'#00a5c3',
      text3:'#ff4e4e',
      cyan:'cyan'
    }

  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/maxpro" element={<Home/>}/>
          <Route path="/risk-profiler" element={<Risk/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App