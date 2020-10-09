import React from 'react'
import PropTypes from 'prop-types'
import { BEMHelper } from '@bz/utils/bemHelper'
import './Button.scss'

const classes = new BEMHelper('btn')

const sayILoveYou = () => { alert('I love you Alisa!') }

const Button = (props) => {
  const { text, type } = props
  return (
    <button
      type={type}
      className={classes(null)}
      onClick={sayILoveYou}
    >
      {text}
    </button>)
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

Button.defaultProps = {
  text: 'Button',
  type: 'button'
}

export default Button
