from rest_framework import serializers

from .models import Project, ProjectPhoto, Testimonial


class TestimonialSerializer(serializers.ModelSerializer):
    """
    Serializer for the `Testimonial` model.
    """

    class Meta:
        model = Testimonial
        fields = (
            'id', 'url', 'name', 'title',
            'photo', 'testimony', 'featured'
        )
        extra_kwargs = {
            'url': {'view_name': 'portfolio:testimonial-detail'}
        }

