import { TestBed } from '@angular/core/testing';

import { PrevisaoTempoService } from './previsao-tempo.service';

describe('PrevisaoTempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrevisaoTempoService = TestBed.get(PrevisaoTempoService);
    expect(service).toBeTruthy();
  });
});
