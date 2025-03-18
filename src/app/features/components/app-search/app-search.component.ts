import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppService } from '../../../core/services/app.service';
import { AppModel } from '../../../core/models/app.model';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import {MatListModule} from '@angular/material/list';
import { NgFor, NgIf } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatListModule, NgFor, NgIf
  ],
  templateUrl: './app-search.component.html',
  styleUrl: './app-search.component.scss'
})
export class AppSearchComponent implements OnInit {
  apps: WritableSignal<AppModel[]> = signal([]);
  searchInput = new FormControl('');
  @Output() appSelected = new EventEmitter<AppModel>();

  constructor(private appService: AppService) {}

  ngOnInit(): void {
      this.searchInput.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(query => {
        if (query && query != ''){
          this.appService.getApps().subscribe(response => {
            this.apps.set(response)
            console.log("search result:", this.apps())
          })
        }
      })
  }

  onSelectApp(app: AppModel): void {
    this.appSelected.emit(app);
  }

}
