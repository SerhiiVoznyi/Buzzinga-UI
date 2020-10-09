import React from 'react'
import PropTypes from 'prop-types'
import { BEMHelper } from '@bz/utils/bemHelper'
import StringHelper from '@bz/utils/stringHelper'
import './Title.scss'

const classes = new BEMHelper('title')

const Title = (props) => {
  const { title, type, link } = props

  const getChild = () => {
    if (StringHelper.isNullOrEmpty(link)) {
      return title
    }

    return (
      <a
        tabIndex='0'
        title={title} aria-label={title} href={link}
      >{title}
      </a>
    )
  }

  const element = React.createElement(type, { className: classes(null, { secondary: props.secondary }) }, getChild())

  return (element)
}

Title.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  sub_title: PropTypes.string,
  link: PropTypes.string
}

Title.defaultProps = {
  title: 'Bazinga UI Title',
  sub_title: '',
  type: 'h4',
  link: ''
}

export default Title
