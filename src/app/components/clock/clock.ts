import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit, OnDestroy{
  currentTime: Date = new Date();
  private timer: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    console.log('Clock stopped');
  }

}
