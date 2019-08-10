import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuComponent } from './modu.component';

describe('ModuComponent', () => {
  let component: ModuComponent;
  let fixture: ComponentFixture<ModuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
