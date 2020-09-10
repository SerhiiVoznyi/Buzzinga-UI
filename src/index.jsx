'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from './pages/ThemeProvider'

import './index.scss'

ReactDOM.render(
  <ThemeProvider />,
  document.getElementById('bazinga-app')
)

module.hot.accept()
