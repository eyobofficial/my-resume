import factory

from django.contrib.auth import get_user_model


User = get_user_model()


class BaseUserFactory(factory.django.DjangoModelFactory):
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    email = factory.LazyAttribute(lambda o: '{}.{}@test.mail'.format(
        o.first_name, o.last_name))
    username = factory.LazyAttribute(lambda o: '{}{}'.format(
        o.first_name, o.last_name).lower())

    class Meta:
        model = User


class UserFactory(BaseUserFactory):
    is_staff = False


class AdminFactory(BaseUserFactory):
    is_staff = True
