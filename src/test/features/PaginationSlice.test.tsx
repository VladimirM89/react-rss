import { expect, describe, test } from 'vitest';
import reducer, {
  initialStateInterface,
  PaginationSlice,
} from '../../features/characters/PaginationSlice';

describe('PaginationSlice tests', () => {
  const { changePage, changeLimit } = PaginationSlice.actions;

  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ page: 1, limit: 25 });
  });

  test('update pagination values when previous state is empty', () => {
    const prevState: initialStateInterface = {
      page: 1,
      limit: 25,
    };

    expect(reducer(prevState, { type: undefined })).toEqual({ page: 1, limit: 25 });
  });

  test('update pagination values when change page', () => {
    const prevState: initialStateInterface = {
      page: 5,
      limit: 10,
    };

    expect(reducer(prevState, changePage(3))).toEqual({ page: 3, limit: 10 });
  });

  test('update pagination values when change limit', () => {
    const prevState: initialStateInterface = {
      page: 5,
      limit: 10,
    };

    expect(reducer(prevState, changeLimit(15))).toEqual({ page: 1, limit: 15 });
  });
});
