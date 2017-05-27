import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  @Output() serverCreated: EventEmitter<{ name: string, content: string }>;
  @Output() blueprintCreated: EventEmitter<{ name: string, content: string }>;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
    this.serverCreated = new EventEmitter<{ name: string, content: string }>();
    this.blueprintCreated = new EventEmitter<{ name: string, content: string }>();
  }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
