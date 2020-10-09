import React from 'react'
import { BEMHelper } from '@bz/utils/bemHelper'
import './Box.scss'

const classes = new BEMHelper('box')

const Box = (props) => {
  return (
    <section className={classes(null, {
      primary: props.primary,
      rounded: props.rounded,
      secondary: props.secondary,
      flex: props.flex
    })}
    >
      {props.children}
    </section>
  )
}

Box.propTypes = {
}

Box.defaultProps = {
}

export default Box
