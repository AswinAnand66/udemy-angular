import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    
})
export class ServerComponent{
    status='online';

    constructor(){
      
          this.status=Math.random() > 0.5 ? 'online':'offline';
      
    }

    getColor(){
        let color=['yellow','green','red','blue','orange']
        let val=Math.floor(Math.random() * 4)
        return this.status=='online'? color[val]:'red';
    }

}