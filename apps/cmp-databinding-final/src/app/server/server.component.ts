import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation,
  OnChanges, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges {
  @Input() serverData: { type: string, name: string, content: string };

  constructor() { 
    console.log('constructor called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called.');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called.');
  }

}
