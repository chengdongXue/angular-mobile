import { TestBed, inject } from '@angular/core/testing';

import { BeerService } from './beer.service';

describe('BeerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerService]
    });
  });

  it('should be created', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));
});
