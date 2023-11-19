import reducer, {
  initialStateInterface,
  characterSlice,
} from '../../features/characters/CharacterSlice';
import { characterData } from '../mocks/mockedData';

describe('PaginationSlice tests', () => {
  const { setCharacterId, updateSuccess, handleDetailView } = characterSlice.actions;

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      id: null,
      character: null,
      isLoading: false,
      isOpened: false,
    });
  });

  it('update detail character values when previous state is empty', () => {
    const prevState: initialStateInterface = {
      id: null,
      character: null,
      isLoading: false,
      isOpened: false,
    };

    expect(reducer(prevState, { type: undefined })).toEqual({
      id: null,
      character: null,
      isLoading: false,
      isOpened: false,
    });
  });

  it('update detail character values when change id', () => {
    const prevState: initialStateInterface = {
      id: 1,
      character: null,
      isLoading: false,
      isOpened: false,
    };

    expect(reducer(prevState, setCharacterId(3))).toEqual({
      id: 3,
      character: null,
      isLoading: true,
      isOpened: true,
    });
  });

  it('update detail character values when update is successed', () => {
    const prevState: initialStateInterface = {
      id: 1,
      character: null,
      isLoading: true,
      isOpened: true,
    };

    expect(reducer(prevState, updateSuccess(characterData))).toEqual({
      id: 1,
      character: characterData,
      isLoading: false,
      isOpened: true,
    });

    it('should open detailed card', () => {
      const prevState: initialStateInterface = {
        id: 1,
        character: null,
        isLoading: false,
        isOpened: false,
      };

      expect(reducer(prevState, handleDetailView(true))).toEqual({
        id: 1,
        character: null,
        isLoading: false,
        isOpened: true,
      });
    });
  });
});
