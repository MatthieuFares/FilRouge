import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantPage } from './composant.page';

describe('ComposantPage', () => {
  let component: ComposantPage;
  let fixture: ComponentFixture<ModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
