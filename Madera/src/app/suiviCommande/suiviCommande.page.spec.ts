import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCommandePage } from './suiviCommande.page';

describe('ModalitePaiementPage', () => {
  let component: SuiviCommandePage;
  let fixture: ComponentFixture<SuiviCommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviCommandePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
