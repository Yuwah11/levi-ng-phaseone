import { ViewportScroller } from '@angular/common';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectlistService } from '../projectlist.service';  

@Component({
  selector: 'app-project-lists',
  templateUrl: './project-lists.component.html',
  styleUrls: ['./project-lists.component.scss']
})
export class ProjectListsComponent implements OnInit {

  projects : any;
  firstImage;
  artificial :boolean  = false
  natural : boolean = false
  cat;
  routeLink : string = ''

  activeState: boolean[] = [true, false, false];
  grouped: { [key: string]: any } = {};
  constructor(
    private router : Router,
    private projectlist_ : ProjectlistService,
    private activatedRoute : ActivatedRoute,
    private location : Location,
    private scroller : ViewportScroller
  ) {
    this.grouped = this.projectlist_.ProjectList.reduce((group, current) => {
      //create your grouping key, by which you want to group the items
      const groupingKey = `${current.category}`;
      //if the group does not yet have an entry for this key, init it to empty array
      group[groupingKey] = group[groupingKey] || [];
      //add the current item to the group
      group[groupingKey].push(current);
      return group;
    }, {});
   }

   ngAfterContentChecked(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.cat = params.get('cat');
      });
      if(this.cat == 'artificial-landscaping' || this.cat == 'landscape-supply-install'){
    this.getprojectbyCat(this.cat)

    this.routeLink = this.location.path()
  }
  else{
    this.getallprojects()
  } 
   }
  ngOnInit(): void {
    //this.category = this.activatedRoute.parent.snapshot.url[1].path;
    
  }
  getallprojects(){
    this.projects = this.projectlist_.ProjectList
  }
  getprojectbyCat(id: any){
    if(id == 'landscape-supply-install'){
      this.projects = this.grouped[id]
    }
    else if(id == 'artificial-landscaping'){
      this.projects = this.grouped[id]
    }
    this.scroller.scrollToAnchor("landscape");
  }

  navigate(param : any){
    this.router.navigate(['/' + param])
  }

}
