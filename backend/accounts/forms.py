from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django import forms

from phonenumber_field.formfields import PhoneNumberField

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    phone_number = PhoneNumberField(
        required=False,
        empty_value=None,
        region='ET',
        error_messages={
            'invalid': 'Enter a valid mobile phone number (e.g. 0911427805)'
        }
    )

    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('email', 'phone_number')


class CustomUserChangeForm(UserChangeForm):
    phone_number = PhoneNumberField(required=False, empty_value=None)

    class Meta(UserChangeForm.Meta):
        model = CustomUser
        fields = ('email', 'phone_number')


class UserRegistrationForm(CustomUserCreationForm):
    first_name = forms.CharField(max_length=60)
    last_name = forms.CharField(max_length=60)

    class Meta(CustomUserCreationForm.Meta):
        fields = CustomUserCreationForm.Meta.fields + ('first_name', 'last_name')


class ProfileUpdateForm(forms.ModelForm):
    phone_number = PhoneNumberField(
        required=False,
        empty_value=None,
        region='ET',
        error_messages={
            'invalid': 'Enter a valid mobile phone number (e.g. 0911427805)'
        }
    )

    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'phone_number')
