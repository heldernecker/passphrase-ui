import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassphraseModalComponent } from './passphrase-modal.component';

describe('PassphraseModalComponent', () => {
  let component: PassphraseModalComponent;
  let fixture: ComponentFixture<PassphraseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassphraseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassphraseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
