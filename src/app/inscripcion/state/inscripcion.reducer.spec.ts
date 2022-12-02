import { inscripcionReducer, estadoInicial } from './inscripcion.reducer';

describe('Inscripcion Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = inscripcionReducer(estadoInicial, action);

      expect(result).toBe(estadoInicial);
    });
  });
});
