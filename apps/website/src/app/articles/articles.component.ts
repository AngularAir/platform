import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngair-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ArticlesComponent  {


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
}
