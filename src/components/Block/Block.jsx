import React from 'react'
import { BEMHelper } from '@bz/utils/bemHelper'
import './Block.scss'

const classes = new BEMHelper('block')

const Block = (props) => {
  const { title, children } = props
  return (
    <div className={classes()}>
      {(title && title.length > 0) && (<div className={classes('title')}>{title}</div>)}
      <div className={classes('content')}>{children}</div>
    </div>
  )
}

Block.propTypes = {
}

Block.defaultProps = {
}

export default Block
