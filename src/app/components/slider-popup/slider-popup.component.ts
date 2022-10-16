import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-slider-popup',
  templateUrl: './slider-popup.component.html',
  styleUrls: ['./slider-popup.component.scss']
})
export class SliderPopupComponent implements OnInit {

  @Input() project_image : any ;
  @Input() selected : any;
  @ViewChild('owlCar', { static: false }) owlCar: CarouselComponent;
  newproject : any ;

  constructor(private imageSlider : ProjectDetailComponent) { }

  closePopup(){
    this.imageSlider.popupShow = false
  }

  ngOnInit(): void {
    this.newproject = this.project_image
    this.slideby()
  }

  slideby(){
    setTimeout(()=>{
      this.owlCar.to(this.selected)
  }, 10);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    animateIn : 'fadeIn',
    //navText: ['Previous', 'Next'],
    //navText : ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


}
