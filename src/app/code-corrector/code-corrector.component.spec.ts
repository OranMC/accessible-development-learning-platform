import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCorrectorComponent } from './code-corrector.component';

describe('CodeCorrectorComponent', () => {
  let component: CodeCorrectorComponent;
  let fixture: ComponentFixture<CodeCorrectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeCorrectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeCorrectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
