from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import TestimonialViewSet


app_name = 'portfolio'

router = DefaultRouter()
router.register(r'testimonials', TestimonialViewSet)

urlpatterns = [
    path('', include(router.urls))
]
