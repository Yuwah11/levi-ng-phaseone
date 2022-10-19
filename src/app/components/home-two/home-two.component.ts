import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectlistService } from '../projectlist.service';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

  projects : any;

  constructor(private router : Router, private projectlist_ : ProjectlistService) { }

  ngOnInit(): void {
    this.projects= this.projectlist_.ProjectList
  }

  navigate(param : any){
    this.router.navigate(['/' + param])
  }

//   scroll(el: HTMLElement) {
//     el.scrollIntoView({behavior: 'smooth'});
// }

}
