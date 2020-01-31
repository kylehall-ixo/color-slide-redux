import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import ColorSlide from './ColorSlide/ColorSlide'
import ColorDisplay from './ColorDisplay/ColorDisplay'

const App: React.FC = () => {
  return (
    <div className='App'>
      <ColorDisplay />
      <ColorSlide />
    </div>
  )
}

export default connect(null, null)(App)
