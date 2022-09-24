import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStyledComponent } from './page-styled.component';

describe('PageStyledComponent', () => {
  let component: PageStyledComponent;
  let fixture: ComponentFixture<PageStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStyledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
