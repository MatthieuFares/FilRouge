import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleComposantPage } from './famillecomposant.page';

describe('FamilleComposantPage', () => {
  let component: FamilleComposantPage;
  let fixture: ComponentFixture<ModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilleComposantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleComposantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
