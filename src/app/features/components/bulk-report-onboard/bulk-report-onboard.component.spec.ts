import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReportOnboardComponent } from './bulk-report-onboard.component';

describe('BulkReportOnboardComponent', () => {
  let component: BulkReportOnboardComponent;
  let fixture: ComponentFixture<BulkReportOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkReportOnboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkReportOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
