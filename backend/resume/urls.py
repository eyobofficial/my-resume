from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import EducationViewSet, ExperienceViewSet, CertificateViewSet, \
    SkillViewSet


app_name = 'resume'

router = DefaultRouter()
router.register(r'educations', EducationViewSet)
router.register(r'experiences', ExperienceViewSet)
router.register(r'certificates', CertificateViewSet)
router.register(r'skills', SkillViewSet)

urlpatterns = [
    path('', include(router.urls))
]
