from rest_framework import serializers

from .models import Skill


class SkillSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Skill
        fields = ('id', 'url', 'title', 'score', 'type', 'description')
        extra_kwargs = {
            'url': {'view_name': 'api:skill-detail'}
        }
