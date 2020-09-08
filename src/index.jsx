'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Page from './components/Page/Page'

import './index.scss'

const title = 'This is the first app added'

ReactDOM.render(
  <Page content={<h1>Hello</h1>} />,
  document.getElementById('bazinga-app')
)

module.hot.accept()
