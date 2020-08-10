from rest_framework.generics import CreateAPIView

from .emails import ContactMessageEmail
from .serializers import MessageSerializer
from .models import Message


class MessageCreateAPIView(CreateAPIView):
    """
    Create new message instances.
    """
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

    def perform_create(self, serializer):
        obj = serializer.save()
        ContactMessageEmail(obj).send()
