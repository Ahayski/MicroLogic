import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import HomePage from './pages/HomePage'
import CountDuration from './pages/CountDuration'
import CurrencyConvert from './pages/CurrencyConvert'
import MobileLegend from './pages/MobileLegend'
import TicTacToe from './pages/TicTacToe'
import MatchingCard from './pages/MatchingCard'
import SalaryCalculating from './pages/SalaryCalculating'
import WordScramb from './pages/WordScramb'
import CurrencyProvider from './context/CurrencyContext'



function App() {
  return <div>
    <NavbarComponent />
    <CurrencyProvider>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/count-duration' Component={CountDuration} />

        <Route path='/currency-convert' Component={CurrencyConvert} />

        <Route path='/mobile-legend' Component={MobileLegend} />
        <Route path='/tictactoe' Component={TicTacToe} />
        <Route path='/matching-card' Component={MatchingCard} />
        <Route path='/salary-calculating' Component={SalaryCalculating} />
        <Route path='/word-scramb' Component={WordScramb} />
      </Routes>
    </CurrencyProvider>
  </div>
}

export default App
