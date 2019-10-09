import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalitePaiementPage } from './modalitePaiement.page';

describe('ModalitePaiementPage', () => {
  let component: ModalitePaiementPage;
  let fixture: ComponentFixture<ModalitePaiementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalitePaiementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalitePaiementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
