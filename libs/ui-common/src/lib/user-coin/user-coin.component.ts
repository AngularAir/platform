import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  profileUrl: string;
  profileImageUrl: string;
  fullName: string;
  twitterHandle: string;
}

@Component({
  selector: 'ngair-user-coin',
  templateUrl: './user-coin.component.html',
  styleUrls: ['./user-coin.component.scss'],
})
export class UserCoinComponent {
  @Input() user: User | null = null;
}

@NgModule({
  declarations: [UserCoinComponent],
  imports: [CommonModule],
  exports: [UserCoinComponent],
})
export class UserCoinComponentModule {}
