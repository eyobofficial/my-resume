from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import ProjectViewSet, TestimonialViewSet


app_name = 'portfolio'

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'testimonials', TestimonialViewSet)

urlpatterns = [
    path('', include(router.urls))
]
