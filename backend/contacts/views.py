from rest_framework.generics import CreateAPIView

from .emails import ContactMessageEmail
from .serializers import MessageSerializer, SubscriptionSerializer
from .models import Message, Subscription


class MessageCreateAPIView(CreateAPIView):
    """
    Create new message instances.
    """
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

    def perform_create(self, serializer):
        obj = serializer.save()
        ContactMessageEmail(obj).send()


class SubscriptionCreateAPIView(CreateAPIView):
    """
    Create new e-mail subscription instances.
    """
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()
