import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routeLink : string = ''

  constructor(
    private router : Router,
    private location : Location,
    private scroller : ViewportScroller
  ) { }

  ngAfterContentChecked() {
    this.routeLink = this.location.path()
  }

  ngOnInit(): void {
  }

  navigate(param : any){
    this.router.navigate(['/' + param])
  }
  
  gotestimonial() {
    this.scroller.scrollToAnchor("testimonial");
  }
}