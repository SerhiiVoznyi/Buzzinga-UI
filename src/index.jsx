'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Components from './pages/Components'

import './index.scss'

ReactDOM.render(
  <Components />,
  document.getElementById('bazinga-app')
)

module.hot.accept()
