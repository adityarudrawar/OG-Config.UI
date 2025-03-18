import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlPipelinesComponent } from './etl-pipelines.component';

describe('EtlPipelinesComponent', () => {
  let component: EtlPipelinesComponent;
  let fixture: ComponentFixture<EtlPipelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtlPipelinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtlPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
