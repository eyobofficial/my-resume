from uuid import uuid4

from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

from phonenumber_field.modelfields import PhoneNumberField

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    """
    Default custom user.
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid4)
    email = models.EmailField('email address', unique=True)
    phone_number = PhoneNumberField(null=True, unique=True)

    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number']

    objects = CustomUserManager()

    class Meta(AbstractUser.Meta):
        default_related_name = 'users'

    def __str__(self):
        return self.email
