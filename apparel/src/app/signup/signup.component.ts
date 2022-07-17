import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApparelService } from '../apparel.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userid: string = "";
  pwd: string = "";
  formdata: any;

  constructor(private apparelService: ApparelService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
   });
  }

  onClickSubmit(data: any) {
    this.apparelService.addUsers(data.emailid, data.passwd);
  }

}
