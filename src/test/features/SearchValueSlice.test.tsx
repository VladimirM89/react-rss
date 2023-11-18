import reducer, {
  initialStateInterface,
  SearchValueSlice,
} from '../../features/characters/SearchValueSlice';

describe('SearchValueSlice tests', () => {
  const { update } = SearchValueSlice.actions;

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ searchValue: '' });
  });

  it('update when previous value is empty', () => {
    const prevState: initialStateInterface = {
      searchValue: '',
    };

    expect(reducer(prevState, update(''))).toEqual({ searchValue: '' });
  });

  it('update when previous value exist', () => {
    const prevState: initialStateInterface = {
      searchValue: 'test',
    };

    expect(reducer(prevState, update('test Redux'))).toEqual({ searchValue: 'test Redux' });
  });
});
