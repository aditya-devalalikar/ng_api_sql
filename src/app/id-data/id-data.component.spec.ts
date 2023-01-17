import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdDataComponent } from './id-data.component';

describe('IdDataComponent', () => {
  let component: IdDataComponent;
  let fixture: ComponentFixture<IdDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
