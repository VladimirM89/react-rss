import reducer, {
  initialStateInterface,
  SearchValueSlice,
} from '../../features/characters/SearchValueSlice';
import { describe, expect, test } from 'vitest';

describe('SearchValueSlice tests', () => {
  const { update } = SearchValueSlice.actions;

  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ searchValue: '' });
  });

  test('update when previous value is empty', () => {
    const prevState: initialStateInterface = {
      searchValue: '',
    };

    expect(reducer(prevState, update(''))).toEqual({ searchValue: '' });
  });

  test('update when previous value exist', () => {
    const prevState: initialStateInterface = {
      searchValue: 'test',
    };

    expect(reducer(prevState, update('test Redux'))).toEqual({ searchValue: 'test Redux' });
  });
});
