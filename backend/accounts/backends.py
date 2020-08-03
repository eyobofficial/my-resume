import phonenumbers

from phonenumbers.phonenumberutil import NumberParseException

from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend


User = get_user_model()


class PhoneNumberBackend(ModelBackend):
    """
    Custom authentication backend to login users using phone number.
    """

    def authenticate(self, request, username=None, password=None):
        try:
            number = phonenumbers.parse(username, 'ET')
            if not phonenumbers.is_valid_number(number):
                return
            try:
                user = User.objects.get(phone_number=number)
                if user.check_password(password):
                    return user
            except User.DoesNotExist:
                return
        except NumberParseException:
            return
