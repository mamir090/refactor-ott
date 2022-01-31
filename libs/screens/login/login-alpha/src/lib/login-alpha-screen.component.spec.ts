import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAlphaScreenComponent } from './login-alpha-screen.component';

describe('LoginAlphaScreenComponent', () => {
  let component: LoginAlphaScreenComponent;
  let fixture: ComponentFixture<LoginAlphaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAlphaScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAlphaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
