import { Component, OnInit } from '@angular/core';
import { ApparelService } from '../apparel.service';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.scss']
})
export class LookbookComponent implements OnInit {
    imageToShow : any;
  constructor(private apparelService: ApparelService) {
   }

  ngOnInit(): void {
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 getImageFromService() {
  this.apparelService.getImage().subscribe(data => {
    this.createImageFromBlob(data);
  }, error => {
    console.log(error);
  });
}

}
