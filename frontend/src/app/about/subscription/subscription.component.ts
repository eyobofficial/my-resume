import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { MessageService } from '@contact/message.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnDestroy {

  @ViewChild('subscriptionForm', {static: false}) subscriptionForm: NgForm;

  serviceSubscription: Subscription;
  isSubmitted = false;
  isSending = false
  isSuccess = false;
  isFailed = false;

  constructor(private messageService: MessageService) {}

  onSubmit(): void {
    //  Reset form state
    this.isSuccess = false;
    this.isFailed = false;

    if (this.subscriptionForm.invalid) return;

    this.isSubmitted = true;
    this.isSending = true;

    const emailObj = this.subscriptionForm.value;
    this.serviceSubscription = this.messageService.createSubscription(emailObj).subscribe(
      (status: boolean) => {
        this.isSuccess = true;
        this.isSending = false;
        this.subscriptionForm.reset();
      },
      error => {
        this.isFailed = true;
        this.isSending = false;
      }
    );
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.isSuccess = false;
    this.isFailed = false;
  }

  ngOnDestroy(): void {
    this.serviceSubscription?.unsubscribe();
  }
}
