from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Skill
from .serializers import SkillSerializer


class SkillViewSet(ReadOnlyModelViewSet):
    serializer_class = SkillSerializer
    queryset = Skill.objects.filter(is_published=True)
