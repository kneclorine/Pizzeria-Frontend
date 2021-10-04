import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
@Component({
    template: ''
})
export class LayoutRouter implements OnInit{
    loadLayout: boolean = true;
    constructor(private activeRoute: ActivatedRoute){

    }
    ngOnInit(): void {
        let suscription:Subscription|null = null;
        suscription = this.activeRoute.data.subscribe(data=>{
           this.loadLayout= data.loadLayout;           
            suscription && suscription.unsubscribe();
        })
    }
}