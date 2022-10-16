import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectlistService } from '../projectlist.service';  

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  //@Input()property!: property;
  @Input() project : any;
  @Input() cat : string

  constructor(
    private router : Router,
    private projectlist_ : ProjectlistService
  ) { }

  

  ngOnInit(): void {
    console.log(this.project, 'ttt')
  }



}