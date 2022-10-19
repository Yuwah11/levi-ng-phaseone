import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private scroller : ViewportScroller,
    private activatedRoute : ActivatedRoute
  ) { }

  ngAfterContentChecked() {
    this.routeLink = this.location.path()
      if(this.routeLink == ''){
        var link = document.getElementById('aboutus')
        link.classList.add('active')
      }
      
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