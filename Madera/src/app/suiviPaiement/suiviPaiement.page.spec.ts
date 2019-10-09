import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPaiementPage } from './suiviPaiement.page';

describe('ModalitePaiementPage', () => {
  let component: SuiviPaiementPage;
  let fixture: ComponentFixture<SuiviPaiementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviPaiementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPaiementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
