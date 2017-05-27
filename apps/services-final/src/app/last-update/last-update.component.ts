import { AccountsService } from './../accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-update',
  templateUrl: './last-update.component.html',
  styleUrls: ['./last-update.component.css']
})
export class LastUpdateComponent implements OnInit {
  id: number;
  oldStatus: string;
  newStatus: string;

  constructor(accountsService: AccountsService) { 
    accountsService.accountStatusUpdated.subscribe(
      (eventObj) => {
        this.id = eventObj.id;
        this.oldStatus = eventObj.oldStatus;
        this.newStatus = eventObj.newStatus;
      }
    );
  }

  ngOnInit() {
  }

}
