import React from 'react'
import { BEMHelper } from '@bz/utils/bemHelper'
import './Divider.scss'

const classes = new BEMHelper('divider')

const Divider = (props) => {
  return (
    <div className={classes()} />
  )
}

export default Divider
