import { Component, OnInit } from "@angular/core";

@Component({
    selector: "main-app",
    templateUrl: './app.component.html',
    styles: [`
        h1 {
            color: blue;
        }
    `]
})
export class AppComponent implements OnInit {
    
    public constructor() {}
    
    public ngOnInit(): void {}
    
}