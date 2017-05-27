import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'hidden'
    }
  ];

  accountStatusUpdated: EventEmitter<{ id: number, oldStatus: string, newStatus: string}>;

  constructor(private loggingService: LoggingService) {
    this.accountStatusUpdated = new EventEmitter<{ id: number, oldStatus: string, newStatus: string}>();
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    var account = this.accounts[id];
    var eventObj = {
      id: id,
      oldStatus: account.status,
      newStatus: status
    };

    account.status = status;

    this.accountStatusUpdated.emit(eventObj);
    this.loggingService.logStatusChange(status);
  }
}
