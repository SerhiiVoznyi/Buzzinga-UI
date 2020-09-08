import React from 'react'
import DOMPurify from 'dompurify'
import { BEMHelper } from '@bz/utils/bemHelper'
import './Page.scss'

const classes = new BEMHelper('page')

const Page = (props) => {
  return (
    <div className={classes()}>{props.content}</div>
  )
}

Page.propTypes = {

}

Page.defaultProps = {

}

export default Page
