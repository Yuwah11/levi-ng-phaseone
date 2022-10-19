import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, NgForm } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Config } from 'protractor';
import { ConfigService } from '../config.service';
import { Contact } from '../contact.dto';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactusForm: FormGroup;
  sending: boolean;

  constructor(private fb: FormBuilder,
    private router : Router, private contactService: ConfigService) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'message' : [null, Validators.required],
    });

    this.sending = false;

  }


  sendMessage(formData: NgForm) {
    this.sending = true;
    console.log(formData);
    this.contactService.sendMessage(formData).subscribe(
      data => console.log(data)
    );

    setTimeout(() => {
      this.sending = false;
      this.cancelForm();
    }, 1000);
  }

  cancel() {
    this.cancelForm();
  }

  cancelForm() {
    this.router.navigate([{outlets: { popup: null }}] );
  }

}
