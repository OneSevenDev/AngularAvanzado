import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDataComponent } from './articulo-data.component';

describe('ArticuloDataComponent', () => {
  let component: ArticuloDataComponent;
  let fixture: ComponentFixture<ArticuloDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
