import * as fromInscripcion from './inscripcion.reducer';
import { selectInscripcionState } from './inscripcion.selectors';

describe('Inscripcion Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInscripcionState({
      [fromInscripcion.inscripcionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
