import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMemoryComponent } from './poke-memory.component';

describe('PokeMemoryComponent', () => {
  let component: PokeMemoryComponent;
  let fixture: ComponentFixture<PokeMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
