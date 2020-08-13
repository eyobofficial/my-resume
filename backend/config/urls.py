"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from rest_framework.permissions import AllowAny
from drf_yasg import openapi
from drf_yasg.renderers import ReDocRenderer
from drf_yasg.views import get_schema_view


# Schema Vie
ReDocRenderer.template = 'shared/drf-yasg-docs.html'  # Overwrite `redoc.html`
schema_view = get_schema_view(
    openapi.Info(
        title='Resume API',
        default_version='v1',
        description='Endpoints for Eyob Tariku\'s resume & portfolio.',
        contact=openapi.Contact(email='eyob@zede.tech'),
        license=openapi.License(name='BSD License')
    ),
    public=True,
    permission_classes=(AllowAny, )
)

urlpatterns = [
    path('portfolio/', include('portfolio.urls', namespace='portfolio')),
    path('resume/', include('resume.urls', namespace='resume')),
    path('contacts/', include('contacts.urls', namespace='contacts')),
    path('admin/', admin.site.urls),
    path('', schema_view.with_ui('redoc', cache_timeout=0))
]

# Media Assets
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Update Admin Site Title
admin.site.site_header = admin.site.site_title = settings.PROJECT_NAME
