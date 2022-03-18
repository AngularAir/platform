import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngair-aa-button',
  templateUrl: './aa-button.component.html',
  styleUrls: ['./aa-button.component.css'],
})
export class AaButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [AaButtonComponent],
  exports: [AaButtonComponent],
})
export class AaButtonComponentModule {}
