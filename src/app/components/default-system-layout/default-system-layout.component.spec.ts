import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSystemLayoutComponent } from './default-system-layout.component';

describe('DefaultSystemLayoutComponent', () => {
  let component: DefaultSystemLayoutComponent;
  let fixture: ComponentFixture<DefaultSystemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSystemLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSystemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
