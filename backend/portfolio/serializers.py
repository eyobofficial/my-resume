from rest_framework import serializers

from .models import Project, ProjectPhoto, Testimonial


class ProjectPhotoSerializer(serializers.ModelSerializer):
    """
    Serialzier class for the `ProjectPhoto` model.
    """

    class Meta:
        model = ProjectPhoto
        fields = ('title', 'photo')


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the `ProjectSerializer` model.
    """
    technologies = serializers.StringRelatedField(many=True)
    photos = ProjectPhotoSerializer(many=True, read_only=True)
    type = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Project
        fields = (
            'url', 'slug', 'name', 'summary', 'description', 'technologies',
            'type', 'private', 'date', 'featured','project_url',
            'repository', 'thumbnail', 'video', 'photos',
            'facebook', 'twitter', 'linkedIn'
        )
        extra_kwargs = {
            'url': {
                'view_name': 'portfolio:project-detail',
                'lookup_field': 'slug'
            }
        }

    def get_type(self, obj):
        """Returns project type string representation."""
        return obj.get_type_display()


class TestimonialSerializer(serializers.ModelSerializer):
    """
    Serializer for the `Testimonial` model.
    """

    class Meta:
        model = Testimonial
        fields = (
            'id', 'url', 'name', 'title', 'photo',
            'testimony', 'featured'
        )
        extra_kwargs = {
            'url': {'view_name': 'portfolio:testimonial-detail'}
        }

