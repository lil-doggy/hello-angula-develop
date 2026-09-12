import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeveloperRegistration } from './developer-registration';

describe('DeveloperRegistration', () => {
  let component: DeveloperRegistration;
  let fixture: ComponentFixture<DeveloperRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperRegistration],
    }).compileComponents();

    fixture = TestBed.createComponent(DeveloperRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
