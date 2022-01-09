import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'ngair-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ArticlesComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private highlightService: HighlightService
  ) {}
}
