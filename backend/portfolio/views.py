from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialViewSet(ReadOnlyModelViewSet):
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.filter(is_published=True)
