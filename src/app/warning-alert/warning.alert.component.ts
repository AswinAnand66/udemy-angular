import { Component } from "@angular/core";

@Component({
    selector:'warning-alert',
    template:`
    <p>Hey, you have an warning!</p>
    `,
    styles:[
        `
        p{
            margin:auto;
            width:50%;
            color:red;
            background-color:yellow;
        }
        `
    ]

})

export class WarningAlertComponent{

}