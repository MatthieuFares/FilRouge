import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPage } from './creer.page';

describe('CreerPage', () => {
  let component: CreerPage;
  let fixture: ComponentFixture<CreerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
