import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngair-aa-stack',
  templateUrl: './aa-stack.component.html',
  styleUrls: ['./aa-stack.component.css'],
})
export class AAStackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // TODO JUSTIN angular create element based on what "element" string is passed in
}

@NgModule({
  imports: [CommonModule],
  declarations: [AAStackComponent],
  exports: [AAStackComponent],
})
export class AAStackComponentModule {}
