import { Component, ReactElement, ReactNode } from 'react';
type Props = {
  children: ReactNode;
  fallback: ReactElement;
};
type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    console.log('error from getDerivedStateFromError', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
