import { Component } from 'react';

export class ErrorButton extends Component {
  throwError() {
    console.log('Show error');
    throw Error('Throw error');
  }

  render() {
    return <button onClick={this.throwError}>Show Error</button>;
  }
}
