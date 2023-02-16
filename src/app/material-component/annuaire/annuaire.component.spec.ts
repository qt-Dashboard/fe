import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireComponent } from './annuaire.component';

describe('AnnuaireComponent', () => {
  let component: AnnuaireComponent;
  let fixture: ComponentFixture<AnnuaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
