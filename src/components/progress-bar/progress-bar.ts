import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
 
  @Input('progress') progress;
 
  constructor() {
 
  }
  
  progressClass (){
    if(this.progress < 10) return "bad";
    if(this.progress < 22) return "regular";
    if(this.progress < 35) return "good";
    if(this.progress > 35) return "verygood";
  }
 
}