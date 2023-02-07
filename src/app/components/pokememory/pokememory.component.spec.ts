import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokememoryComponent } from './pokememory.component';

describe('PokememoryComponent', () => {
  let component: PokememoryComponent;
  let fixture: ComponentFixture<PokememoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokememoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokememoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
