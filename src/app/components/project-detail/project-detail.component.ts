import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectlistService } from '../projectlist.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  name;
  project;
  image;
  category;
  popupShow : boolean = false
  paramID : string

  constructor(
    private activatedRoute : ActivatedRoute,
    private projectlist_ : ProjectlistService
  ) { }

  ngOnInit(): void {
    //this.category = this.activatedRoute.parent.snapshot.url[1].path;

    this.name = this.activatedRoute.snapshot.paramMap.get('name')
    this.category = this.activatedRoute.snapshot.paramMap.get('cat')
    //this.category = this.activatedRoute.snapshot.paramMap.get('category')
    this.project = this.projectlist_.ProjectList.find(x => x.title == this.name && x.category == this.category)
    //alert(this.category)
    this.image = this.project.img
  }

  showPopup(id : string){
    this.popupShow  = true
    this.paramID = id
  }

}