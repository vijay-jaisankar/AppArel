import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApparelService } from '../apparel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userid: string = "";
  pwd: string = "";
  formdata: any;
  resp : any;
  message: any;

  constructor(private apparelService: ApparelService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
   });
  }

  onClickSubmit(data: any) {
    this.apparelService.checkUserInfo(data.emailid, data.passwd).subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        this.resp = response; 
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
    });

  if(this.resp == "correct"){
    this.message = "Logged in successfully!"
  }}

}
