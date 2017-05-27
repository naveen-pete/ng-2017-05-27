import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    { type: 'server', name: 'server 1', content: 'server 1 desc' }
  ];

  onServerCreated(serverData: { name: string, content: string }) {
    this.servers.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintCreated(serverData: { name: string, content: string }) {
    this.servers.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content
    });
  }
}
