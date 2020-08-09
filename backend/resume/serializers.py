from rest_framework import serializers

from .models import Education, Experience, Certificate, Skill


class EducationSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the `Education` model.
    """

    class Meta:
        model = Education
        fields = ('id', 'url', 'title', 'institute', 'description', 'year')
        extra_kwargs = {
            'url': {'view_name': 'resume:education-detail'}
        }


class ExperienceSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the `Experience` model.
    """

    class Meta:
        model = Experience
        fields = (
            'id', 'url', 'title', 'place', 'description',
            'start', 'end', 'still_working'
        )
        extra_kwargs = {
            'url': {'view_name': 'resume:experience-detail'}
        }


class CertificateSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the `Certificate` model.
    """

    class Meta:
        model = Certificate
        fields = ('id', 'url', 'title', 'institute', 'icon', 'date', 'link')
        extra_kwargs = {
            'url': {'view_name': 'resume:certificate-detail'}
        }


class SkillSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the `Skill` model.
    """

    class Meta:
        model = Skill
        fields = (
            'id', 'url', 'title', 'score',
            'type', 'description', 'featured'
        )
        extra_kwargs = {
            'url': {'view_name': 'resume:skill-detail'}
        }

