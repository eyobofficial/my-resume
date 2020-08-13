from rest_framework import serializers

from .models import Message, Subscription


class MessageSerializer(serializers.ModelSerializer):
    """
    Serializer for the `Message` model.
    """

    class Meta:
        model = Message
        fields = ('id', 'name', 'email', 'subject', 'message')


class SubscriptionSerializer(serializers.ModelSerializer):
    """
    Serializers for the `Subscription` model.
    """
    email = serializers.EmailField()

    class Meta:
        model = Subscription
        fields = ('email', )

    def create(self, validated_data):
        """Create new subscription if user hasn't already subscribed."""
        obj, _ = Subscription.objects.get_or_create(**validated_data)
        return obj
