import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  isLoading$: Observable<boolean>;
  constructor(private loadService: LoaderService) {
    this.isLoading$ = this.loadService.loading$;
  }
}
