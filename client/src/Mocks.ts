import { Scenarios } from 'data-mocks';
import { Shift } from './Entities';

export const mocks: Scenarios = {
  'default': [
    {
      url: /next-shift/,
      method: 'GET',
      response: { shiftSize: 'Large' } as Shift,
      responseCode: 200,
      delay: 250
    },
    {
      url: /foo/,
      method: 'GET',
      response: {},
      responseCode: 200,
      delay: 250
    }
  ],
  'medium': [
    {
      url: /next-shift/,
      method: 'GET',
      response: { foo: 'bar' },
      responseCode: 200,
      delay: 250
    }
  ]
};
