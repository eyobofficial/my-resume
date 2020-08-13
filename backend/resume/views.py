from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Education, Experience, Certificate, Skill
from .serializers import EducationSerializer, ExperienceSerializer, \
    CertificateSerializer, SkillSerializer


class EducationViewSet(ReadOnlyModelViewSet):
    serializer_class = EducationSerializer
    queryset = Education.objects.filter(is_published=True)


class ExperienceViewSet(ReadOnlyModelViewSet):
    serializer_class = ExperienceSerializer
    queryset = Experience.objects.filter(is_published=True)


class CertificateViewSet(ReadOnlyModelViewSet):
    serializer_class = CertificateSerializer
    queryset = Certificate.objects.filter(is_published=True)


class SkillViewSet(ReadOnlyModelViewSet):
    serializer_class = SkillSerializer
    queryset = Skill.objects.filter(is_published=True)

    def get_queryset(self):
        qs = super().get_queryset()
        order_by = self.request.query_params.get('order_by')
        if order_by is not None:
            qs = qs.order_by(order_by)
        return qs
