import { Component, ErrorInfo, ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: Readonly<State> = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    console.log('error', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3> This name not found. Please enter correct name.</h3>;
    }

    return this.props.children;
  }
}
