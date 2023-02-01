import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviaCardsComponent } from './previa-cards.component';

describe('PreviaCardsComponent', () => {
  let component: PreviaCardsComponent;
  let fixture: ComponentFixture<PreviaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviaCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
