import { Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { timer } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  template: `
  <title>Stop watch</title>
  <body>
    <div class="stop-watch">
      <div class="display">{{watchnumber}}</div>
      <button class="control" (click) = "startTimer($event)">{{watchbutton}}</button>
    </div>
  </body>
  `,

  styles:  [
  `
  .stop-watch {
    font-family: 'Source Code Pro', monospace;
    text-align: center;
    font-size: 3em;
    padding: 30px;
  }
  .control {
    width: 300px;
    padding: 5px;
    margin-top: 15px;
    font-size: 36px;
    font-weight: bold;
    border: 2px solid #f44336;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  .control:hover {
    background: #f44336;
    color: aliceblue;
  }
  `
  ]
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  watchnumber: string = "00:00:00"
  watchbutton: string = "Start"
  

    startTimer(){
      var i =0;

      function countPlus(){
        var truetime = i++;
        var milliseconds = truetime;
      

        var seconds = Math.floor(truetime/100)
        var minutes = Math.floor(seconds/60)
        var secshow = seconds - minutes*60
        var showmili = milliseconds - (seconds)*100

        //아래는 스트링화
        var min = minutes.toString();
        var sec = secshow.toString();
        var milli = showmili.toString();

        if (min.length<2){
          min = "0" + min;
        }

        if (sec.length<2){
          sec = "0" + sec;
        }

        if (milli.length<2){
          milli = "0" + milli;
        }

        console.log(min+":"+sec+":"+milli)
        return(min+":"+sec+":"+milli)
        
      }
      setInterval(countPlus(),10)

    }

}
