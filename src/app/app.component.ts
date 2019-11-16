import { Component, OnChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {
  title = 'app';

constructor(){
}

ngOnChanges(){
  
}

}
