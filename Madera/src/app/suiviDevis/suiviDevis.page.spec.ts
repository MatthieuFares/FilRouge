import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDevisPage } from './suiviDevis.page';

describe('ModalitePaiementPage', () => {
  let component: SuiviDevisPage;
  let fixture: ComponentFixture<SuiviDevisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviDevisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviDevisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
