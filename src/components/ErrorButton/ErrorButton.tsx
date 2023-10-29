import { Component } from 'react';

type State = {
  hasError: boolean;
};

export class ErrorButton extends Component<object, State> {
  state: Readonly<State> = {
    hasError: false,
  };

  private throwError = (): void => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Error Boundary by clicking button');
    }
    return <button onClick={this.throwError}>Show Error</button>;
  }
}
