import { TestBed, inject } from '@angular/core/testing';

import { CargaImagenesFireBaseService } from './carga-imagenes-fire-base.service';

describe('CargaImagenesFireBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaImagenesFireBaseService]
    });
  });

  it('should be created', inject([CargaImagenesFireBaseService], (service: CargaImagenesFireBaseService) => {
    expect(service).toBeTruthy();
  }));
});
