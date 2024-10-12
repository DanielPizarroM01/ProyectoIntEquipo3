import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreguntasresPage } from './preguntasres.page';

describe('PreguntasresPage', () => {
  let component: PreguntasresPage;
  let fixture: ComponentFixture<PreguntasresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
