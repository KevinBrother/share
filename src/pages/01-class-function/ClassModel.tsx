import React, { Component } from 'react'

export default class ClassModel extends Component {

  state = {
    width: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { width } = this.state
    return (
      <div>{width}</div>
    )
  }
}
