import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-first-app';
  // name="Aswin Anandh";
  // servers=[];

  // onAddServer(){
  //   this.servers.push("Another Server");
  // }
  serverElements=[{type:'server',name:'Testserver',content:'Just a test!'}];
}
