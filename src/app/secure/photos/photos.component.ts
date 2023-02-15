import { Component } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
 
export const PHOTOS: Photos[] = [
  { id: 1, url: '../../../assets/img/general/1.jpg' },
  { id: 2, url: '../../../assets/img/general/2.jpg' },
  { id: 3, url: '../../../assets/img/general/3.jpg' },
  { id: 4, url: '../../../assets/img/general/4.jpg' },
  { id: 5, url: '../../../assets/img/general/5.jpg' },
  { id: 6, url: '../../../assets/img/general/6.jpg' },
  { id: 7, url: '../../../assets/img/general/7.jpg' },
  { id: 8, url: '../../../assets/img/general/8.jpg' },
  { id: 9, url: '../../../assets/img/general/9.jpg' },
  { id: 10, url: '../../../assets/img/general/10.jpg' },
  { id: 11, url: '../../../assets/img/general/11.jpg' },
  { id: 12, url: '../../../assets/img/general/12.jpg' },
  { id: 13, url: '../../../assets/img/general/13.jpg' },
  { id: 14, url: '../../../assets/img/general/14.jpg' },
  { id: 15, url: '../../../assets/img/general/15.jpg' },
  { id: 16, url: '../../../assets/img/general/16.jpg' },  
  { id: 17, url: '../../../assets/img/general/17.jpg' },
  { id: 18, url: '../../../assets/img/general/18.jpg' },
  { id: 19, url: '../../../assets/img/general/19.jpg' },
  { id: 20, url: '../../../assets/img/general/20.jpg' },
  { id: 21, url: '../../../assets/img/general/21.jpg' },
  { id: 22, url: '../../../assets/img/general/22.jpg' },
  { id: 23, url: '../../../assets/img/general/23.jpg' },  
  { id: 24, url: '../../../assets/img/general/24.jpg' },
  { id: 25, url: '../../../assets/img/general/25.jpg' },
  { id: 26, url: '../../../assets/img/general/26.jpg' },

];


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos = PHOTOS;

}
