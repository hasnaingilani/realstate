import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, delay, map } from 'rxjs/operators';
import { CProperty } from 'src/app/shared/interfaces/CProperty';
import { PropertylistService } from 'src/app/shared/services/propertylist.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId!: number;
  //public property = new CProperty();
  public property = new CProperty();
  public properties: any;
  newProperty: CProperty[]=[];
  localId!:number;
  public galleryOptions!: NgxGalleryOptions[];
  public galleryImages!: NgxGalleryImage[];
  propertyData:any= [];
  constructor(private route:ActivatedRoute, private router: Router,
              private propertylistService:PropertylistService) {}

  ngOnInit(): void {

    this.propertyId = +this.route.snapshot.params['id'];
  //  this.loadProperties(this.propertyId);
    this.route.data.subscribe(data => {
      this.property = data['prp'];
    })


    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/defaulthouse2.jpg',
        medium: 'assets/images/defaulthouse2.jpg',
        big: 'assets/images/defaulthouse2.jpg'
      },
      {
        small: 'assets/images/defaulthouse1.jpg',
        medium: 'assets/images/defaulthouse1.jpg',
        big: 'assets/images/defaulthouse1.jpg'
      },
      {
        small: 'assets/images/defaulthouse1.jpeg',
        medium: 'assets/images/defaulthouse1.jpeg',
        big: 'assets/images/defaulthouse1.jpeg'
      },{
        small: 'assets/img/gallery/4-small.jpeg',
        medium: 'assets/img/gallery/4-medium.jpeg',
        big: 'assets/img/gallery/4-big.jpeg'
      },
      {
        small: 'assets/img/gallery/5-small.jpeg',
        medium: 'assets/img/gallery/5-medium.jpeg',
        big: 'assets/img/gallery/5-big.jpeg'
      }
    ];


  }
  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail',this.propertyId]);
  }

  /* loadProperties(id:number) {
      return this.propertylistService.getPropertyDetail(id).subscribe(data => this.property = data)
  } */
}
