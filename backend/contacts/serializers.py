from rest_framework import serializers

from .models import Message


class MessageSerializer(serializers.ModelSerializer):
    """
    Serializer for the `Message` model.
    """

    class Meta:
        model = Message
        fields = ('id', 'name', 'email', 'subject', 'message')
