import React, { Component } from 'react'
import { getUserById } from './utils';

export default class LifeCycle extends Component<{ id: number }> {
  componentDidMount() {
    getUserById({ id: this.props.id });
  }

  componentDidUpdate(prevProps: { id: number }) {
    if (prevProps.id !== this.props.id) {
      getUserById({ id: prevProps.id });
    }
  }

  render() {
    return (
      <div>LifeCycle</div>
    )
  }
}
