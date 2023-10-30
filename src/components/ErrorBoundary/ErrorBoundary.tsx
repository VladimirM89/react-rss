import { Component, ReactElement, ReactNode } from 'react';
import { removeItemFromLocalStorage } from '../../utils/localStorage';
import styles from './ErrorBoundary.module.scss';
import { SEARCH_VALUE } from '../../constants/stringConstants';

type Props = {
  children: ReactNode;
  fallback: ReactElement;
};
type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  private handleReloadPage = (): void => {
    removeItemFromLocalStorage(SEARCH_VALUE);
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          {this.props.fallback}
          <button className="btn" onClick={this.handleReloadPage}>
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
