const sum = require('./module');

const myMock = jest.fn();

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

test('Mock test', () => {
  expect(myMock()).toBe(10);
});

global.fetch = require('jest-fetch-mock')
const Request = require('../src/module').Request;


describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('Api.kanye.rest to be Called', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'The best quote in the world' }))
    Request();
    expect(fetch).toBeCalled()
  })
})
