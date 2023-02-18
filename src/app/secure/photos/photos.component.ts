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
  { id: 27, url: '../../../assets/img/general/27.jpg' },
  { id: 28, url: '../../../assets/img/general/28.jpg' },
  { id: 29, url: '../../../assets/img/general/29.jpg' },
  { id: 30, url: '../../../assets/img/general/30.jpg' },
  { id: 31, url: '../../../assets/img/general/31.jpg' },
  { id: 32, url: '../../../assets/img/general/32.jpg' },
  { id: 33, url: '../../../assets/img/general/33.jpg' },
  { id: 34, url: '../../../assets/img/general/34.jpg' },
  { id: 35, url: '../../../assets/img/general/35.jpg' },
  { id: 36, url: '../../../assets/img/general/36.jpg' },
  { id: 37, url: '../../../assets/img/general/37.jpg' },
  { id: 38, url: '../../../assets/img/general/38.jpg' },
  { id: 39, url: '../../../assets/img/general/39.jpg' },
  { id: 40, url: '../../../assets/img/general/40.jpg' },
  { id: 41, url: '../../../assets/img/general/41.jpg' },
  { id: 42, url: '../../../assets/img/general/42.jpg' },  
  { id: 43, url: '../../../assets/img/general/43.jpg' },
  { id: 44, url: '../../../assets/img/general/44.jpg' },
  { id: 45, url: '../../../assets/img/general/45.jpg' },
  { id: 46, url: '../../../assets/img/general/46.jpg' },
  { id: 47, url: '../../../assets/img/general/47.jpg' },
  { id: 48, url: '../../../assets/img/general/48.jpg' },
  { id: 49, url: '../../../assets/img/general/49.jpg' },  
  { id: 50, url: '../../../assets/img/general/50.jpg' },
  { id: 51, url: '../../../assets/img/general/51.jpg' },
  { id: 52, url: '../../../assets/img/general/52.jpg' },  
  { id: 53, url: '../../../assets/img/general/53.jpg' },
  // { id: 54, url: '../../../assets/img/general/54.jpg' },
  // { id: 55, url: '../../../assets/img/general/55.jpg' },
  // { id: 56, url: '../../../assets/img/general/56.jpg' },
  // { id: 57, url: '../../../assets/img/general/57.jpg' },
  // { id: 58, url: '../../../assets/img/general/58.jpg' },
  // { id: 59, url: '../../../assets/img/general/59.jpg' },
  // { id: 60, url: '../../../assets/img/general/60.jpg' },
  // { id: 61, url: '../../../assets/img/general/61.jpg' },

];


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos = PHOTOS;

}
