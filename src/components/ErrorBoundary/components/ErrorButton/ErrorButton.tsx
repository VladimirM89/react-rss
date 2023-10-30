import { Component } from 'react';
import cn from 'classnames';
import styles from './ErrorButton.module.scss';
import { ERROR_TEXT_BY_CLICK } from '../../../../constants/stringConstants';

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
      throw new Error(ERROR_TEXT_BY_CLICK);
    }
    return (
      <div className="wrapper">
        <button className={cn(styles.error_btn, 'btn')} onClick={this.throwError}>
          Show Error
        </button>
      </div>
    );
  }
}
