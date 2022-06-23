import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId : number = 4444;
  serverStatus : string = "offline";
  addServer=false;
  serverUpdation='No server is Created'
  toogle=false;
  newServerName:string;

  constructor() {
    setTimeout(() => {
      this.addServer=true;
   }, 3000);
   }

  ngOnInit(): void {
  }
  changeServer (){
    this.toogle=!this.toogle;
    if(this.toogle){

      this.serverUpdation=this.newServerName;
    }else{
      this.serverUpdation='no Server is Created';
    }
  }
  
  getServerStatus () {
    return this.serverStatus;
  }
  getName(event:any){
     this.newServerName=event.target.value;

  }
}
