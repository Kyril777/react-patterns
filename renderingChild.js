import React, { Component } from 'react';

export default class Notice extends Component {
  render() {
    const { heirs } = this.props;
     return (
      <div className="notice">
            {heirs}
      </div>
    );
  }
}
