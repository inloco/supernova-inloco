import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class MainContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { children, className, ...otherProps } = this.props
    const classes = cx('inloco-layout__main-content', className)
    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}

export default MainContent
