/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaqKorComponent } from './faq-kor.component';

describe('FaqKorComponent', () => {
  let component: FaqKorComponent;
  let fixture: ComponentFixture<FaqKorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqKorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqKorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
