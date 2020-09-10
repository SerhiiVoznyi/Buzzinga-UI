'use strict'

import React from 'react'
import Box from '@bz/components/Box/Box'
import Button from '@bz/components/Button/Button'

const Buttons = () => (
  <Box rounded>
    <h1>Buttons</h1>
    <Button text='Button' />
    <Button text='Button' />
    <Button text='Button' />
    <Button text='Button' />
  </Box>
)

const ThemeProvider = (props) => {
  return (Buttons())
}

export default ThemeProvider
