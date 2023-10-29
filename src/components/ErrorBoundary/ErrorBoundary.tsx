import { Component, ReactElement, ReactNode } from 'react';
import { removeItemFromLocalStorage } from '../../utils/localStorage';
import styles from './ErrorBoundary.module.scss';

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

  private handleReloadPage = (): void => {
    removeItemFromLocalStorage('inputValue');
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          {this.props.fallback}
          <button className="btn" onClick={this.handleReloadPage}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
