import { Component, OnInit } from '@angular/core';
import * as Paper from 'paper';

@Component({
  selector: 'app-artboard',
  templateUrl: './artboard.component.html',
  styleUrls: ['./artboard.component.scss']
})
export class ArtboardComponent implements OnInit {
  canvas!: HTMLCanvasElement;
  currentTool: any;
  myPath: any;
  color: any;

  constructor() {
    this.color = '#000';
   }

  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    Paper.setup(this.canvas);
    this.freeHandTool();
  }

  freeHandTool() {
    this.currentTool = new Paper.Tool();
    this.currentTool.activate();
    this.currentTool.onMouseDown = (event: any) => {
      this.myPath = new Paper.Path();
      this.myPath.strokeColor = this.color;
      this.myPath.add(event.point);
    }
    this.currentTool.onMouseDrag = (event: any) => {
      this.myPath.add(event.point);
      console.log(this.myPath);
    }
  }

  rectangleTool() {
    this.currentTool = new Paper.Tool();
    this.currentTool.activate();
    this.currentTool.onMouseDrag = (event: any) => {
      var rectangle = new Paper.Path.Rectangle(event.downPoint, event.point)
      rectangle.strokeColor = this.color;
      rectangle.fillColor = new Paper.Color(0, 0, 0, 0.0001);
      rectangle.data.type = 'rectangle';
      rectangle.removeOnDrag();
    }
  }

  clearCanvas() {
    this.myPath = null;
    Paper.project.clear()
  }

  upload(event: any){
    let img = new Image() as any;
    let ctx = this.canvas.getContext('2d') as any;
    let reader = new FileReader();
    let that = this;
    reader.onload = function() {
    img.src = reader.result;
      img.onload = function() {
      let raster = new Paper.Raster(img, new Paper.Point(700, 700));
      raster.scale(0.5);
      }
    ctx.drawImage(img, 0, 0);
    }
  reader.readAsDataURL(event.target.files[0]);
  }
}
