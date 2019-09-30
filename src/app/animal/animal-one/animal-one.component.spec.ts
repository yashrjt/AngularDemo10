import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalOneComponent } from './animal-one.component';

describe('AnimalOneComponent', () => {
  let component: AnimalOneComponent;
  let fixture: ComponentFixture<AnimalOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
