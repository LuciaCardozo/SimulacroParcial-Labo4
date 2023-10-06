import { TestBed } from '@angular/core/testing';

import { ApiPeliculasService } from './api-peliculas.service';

describe('ApiPeliculasService', () => {
  let service: ApiPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
