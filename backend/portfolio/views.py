from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Project, Testimonial
from .serializers import ProjectSerializer, TestimonialSerializer


class ProjectViewSet(ReadOnlyModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.filter(is_published=True)
    lookup_field = 'slug'


class TestimonialViewSet(ReadOnlyModelViewSet):
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.filter(is_published=True)
