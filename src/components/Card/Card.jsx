import React from 'react'
import PropTypes from 'prop-types'
import { BEMHelper } from '@bz/utils/bemHelper'
import './Card.scss'

const classes = new BEMHelper('card')

const Card = (props) => {
  const { children, style } = props

  return (
    <div className={classes()}>
      <div className={classes('header')} style={style} />
      <div className={classes('body')}>
        {children}
      </div>
      <div className={classes('footer')} />
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

Card.defaultProps = {
  text: 'Button',
  type: 'button'
}

export default Card
