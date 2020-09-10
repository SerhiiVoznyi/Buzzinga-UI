import React from 'react'
import { BEMHelper } from '@bz/utils/bemHelper'
import './Box.scss'

const classes = new BEMHelper('box')

const Box = (props) => {
  return (
    <article className={classes(null, { rounded: props.rounded })}>
      {props.children}
    </article>
  )
}

Box.propTypes = {
}

Box.defaultProps = {
}

export default Box
