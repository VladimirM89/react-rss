import { FC, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchList } from '../../components/SearchList/SearchList';
import {
  CharacterInterface,
  SearchInfoInterface,
  SearchResponseInterface,
} from '../../interfaces/SearchResponse';
import { ErrorButton } from '../../components/ErrorBoundary/components/ErrorButton/ErrorButton';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import cn from 'classnames';
import styles from './SearchPage.module.scss';
import { LoaderComponent } from '../../components/LoaderComponent/LoaderComponent';
import { Fallback } from '../../components/ErrorBoundary/components/ErrorButton/Fallback/Fallback';
import { NotFound } from '../../components/ErrorBoundary/components/NotFound/NotFound';

type State = {
  characters: Array<CharacterInterface>;
  info: SearchInfoInterface | null;
};

export const SearchPage: FC = () => {
  const [charactersInfo, setCharactersInfo] = useState<State>({
    characters: [],
    info: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNoItems, setisNoItems] = useState<boolean>(false);

  const handleChangeState = (
    response: Array<CharacterInterface> | SearchResponseInterface
  ): void => {
    if (Array.isArray(response)) {
      setCharactersInfo({
        ...charactersInfo,
        characters: response,
      });
    } else {
      setCharactersInfo({
        characters: response.results,
        info: response.info,
      });
    }
    setIsLoading(false);
    setisNoItems(false);
  };

  const handleLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const handleResponse = (value: boolean) => {
    setisNoItems(value);
  };

  return (
    <div className={styles.container}>
      <ErrorBoundary fallback={<Fallback />}>
        <main className={cn('wrapper', styles.main_wrapper)}>
          <SearchBar
            handleLoading={handleLoading}
            saveToState={handleChangeState}
            handleResponse={handleResponse}
          />
          {isLoading ? (
            <LoaderComponent />
          ) : (
            <>
              {isNoItems ? (
                <NotFound />
              ) : (
                <>
                  <SearchList list={charactersInfo.characters} />
                  <ErrorButton />
                </>
              )}
            </>
          )}
        </main>
      </ErrorBoundary>
    </div>
  );
};

// export class SearchPage extends Component<object, State> {
//   state: Readonly<State> = {
//     characters: [],
//     info: null,
//     isLoading: true,
//   };

//   private handleChangeState = (response: Array<CharacterInterface> | SearchResponseInterface) => {
//     setTimeout(() => {
//       if (Array.isArray(response)) {
//         this.setState({
//           characters: response,
//           info: null,
//           isLoading: false,
//         });
//       } else {
//         this.setState({
//           characters: response.results,
//           info: response.info,
//           isLoading: false,
//         });
//       }
//     }, 1000);
//   };

//   private handleLoading = (value: boolean) => {
//     this.setState({
//       ...this.state,
//       isLoading: value,
//     });
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <Header />
//         <ErrorBoundary fallback={<Fallback />}>
//           <main className={cn('wrapper', styles.main_wrapper)}>
//             <SearchBar handleLoading={this.handleLoading} saveToState={this.handleChangeState} />
//             {this.state.isLoading ? (
//               <LoaderComponent />
//             ) : (
//               <>
//                 <SearchList list={this.state.characters} />
//                 <ErrorButton />
//               </>
//             )}
//           </main>
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }
