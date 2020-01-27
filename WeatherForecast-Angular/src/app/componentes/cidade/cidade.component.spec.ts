import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCidadeComponent } from './cidade.component';

describe('BuscaCidadeComponent', () => {
  let component: BuscaCidadeComponent;
  let fixture: ComponentFixture<BuscaCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
