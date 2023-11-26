import { expect, describe, test } from 'vitest';
import reducer, {
  initialStateInterface,
  charactersInfoSlice,
} from '../../features/characters/CharactersInfoSlice';
import { mockedCharacterData, mockedPagination } from '../mocks/mockedData';

describe('CharactersInfo tests', () => {
  const { update, updateSuccess } = charactersInfoSlice.actions;

  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      data: [],
      pagination: null,
      isLoading: false,
    });
  });

  test('update detail character values when previous state is empty', () => {
    const prevState: initialStateInterface = {
      data: [],
      pagination: null,
      isLoading: false,
    };

    expect(reducer(prevState, { type: undefined })).toEqual({
      data: [],
      pagination: null,
      isLoading: false,
    });
  });

  test('update loading flag', () => {
    const prevState: initialStateInterface = {
      data: [],
      pagination: null,
      isLoading: false,
    };

    expect(reducer(prevState, update(true))).toEqual({
      data: [],
      pagination: null,
      isLoading: true,
    });
  });

  test('update detail character values when update is successed', () => {
    const prevState: initialStateInterface = {
      data: [],
      pagination: null,
      isLoading: true,
    };

    expect(
      reducer(
        prevState,
        updateSuccess({ data: [mockedCharacterData], pagination: mockedPagination })
      )
    ).toEqual({
      data: [mockedCharacterData],
      pagination: mockedPagination,
      isLoading: false,
    });
  });
});
