import React, { Component } from 'react'
import { getUserById } from './utils';

export default class LifeCycle extends Component<{ id: string }> {
  componentDidMount() {
    getUserById({ id: this.props.id });
  }

  componentDidUpdate(prevProps: { id: string }) {
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
