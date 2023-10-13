import { isElectron } from './is-electron';

describe('isElectron', () => {
  it('should be of type function', () => {
    expect(typeof isElectron).toBe('function');
  });
});
