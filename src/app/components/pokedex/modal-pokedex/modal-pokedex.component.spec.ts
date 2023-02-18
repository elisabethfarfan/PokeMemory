import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokedexComponent } from './modal-pokedex.component';

describe('ModalPokedexComponent', () => {
  let component: ModalPokedexComponent;
  let fixture: ComponentFixture<ModalPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
