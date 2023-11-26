import { describe, expect, test } from 'vitest';
import { SearchParams } from '../interfaces/ParamsInterfaces';
import { customCreateSearchParams } from './queryParams';

describe('Test function that create currect query params', () => {
  test('Return correct values without q params', () => {
    const mockObj: SearchParams = {
      page: '1',
      limit: '10',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ page: '1', limit: '10' });
  });
  test('Return correct values without page params', () => {
    const mockObj: SearchParams = {
      q: 'test',
      limit: '10',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ q: 'test', limit: '10' });
  });
  test('Return correct values without limit params', () => {
    const mockObj: SearchParams = {
      q: 'test',
      page: '10',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ q: 'test', page: '10' });
  });
  test('Return correct values without page and limit params', () => {
    const mockObj: SearchParams = {
      q: 'test',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ q: 'test' });
  });
  test('Return correct values with limit less than 10', () => {
    const mockObj: SearchParams = {
      q: 'test',
      limit: '9',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ q: 'test', limit: '10' });
  });
  test('Return correct values with limit more than 10 and less than 15, ', () => {
    const mockObj: SearchParams = {
      q: 'test',
      limit: '13',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ q: 'test', limit: '15' });
  });
  test('Return correct values with limit more than 15 and less than 20, ', () => {
    const mockObj: SearchParams = {
      q: 'test',
      limit: '17',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ q: 'test', limit: '20' });
  });
  test('Return correct values with limit more than 20 and less than 25, ', () => {
    const mockObj: SearchParams = {
      q: 'test',
      limit: '24',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ q: 'test', limit: '25' });
  });
  test('Return correct values with limit more than 10 and less than 25, ', () => {
    const mockObj: SearchParams = {
      limit: '50',
    };
    expect(customCreateSearchParams(mockObj)).toEqual({ limit: '25' });
  });
});
