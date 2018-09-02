import { Component, 
         OnInit, 
         OnChanges,
         DoCheck,
         SimpleChanges,
         Input} from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit, OnChanges, DoCheck{
    
    @Input()
    name:string;

    constructor(){
        console.log('constructor');
    }

    ngOnChanges(change: SimpleChanges){
        console.log(`${this.name} ServerComponent OnChanges`);
    }

    ngOnInit(){
        console.log(`${this.name} ServerComponent OnInit`);
    }

    ngDoCheck(){
        console.log(`${this.name} ServerComponent DoCheck`);
    }
}