import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AbstractControl,
         FormBuilder,
         FormGroup,
         Validators  } from '@angular/forms';
import { environment } from '@environments/environment';

import { MessageService } from './message.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private pageTitle = `${environment.pageTitle} - Get in Touch`;
  contactForm: FormGroup;
  isSubmitted = false;
  isSending = false;
  isFailed = false;

  constructor(private titleService: Title,
              private messageService: MessageService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
    this.initContactForm();
  }

  private initContactForm(): void {
    // Initialize a contact form.
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get name(): AbstractControl { return this.contactForm.get('name') }

  get email(): AbstractControl { return this.contactForm.get('email') }

  get subject(): AbstractControl { return this.contactForm.get('subject') }

  get message(): AbstractControl { return this.contactForm.get('message') }

  onSubmit(): void {
    if (this.contactForm.invalid) { return }

    // Reset form
    this.isSending = true;
    this.isSubmitted = false;
    this.isFailed = false;

    this.messageService.sendMessage(this.contactForm.value).subscribe(
      (sent: boolean) => {
        // Success
        this.contactForm.reset();
        this.isSubmitted = true;
        this.isFailed = false;
        this.isSending = false;
      },
      error => {
        // Error
        this.isSubmitted = true;
        this.isFailed = true;
        this.isSending = false;
      }
    );
  }
}
