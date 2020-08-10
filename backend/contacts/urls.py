from django.urls import path

from .views import MessageCreateAPIView


app_name = 'contacts'

urlpatterns = [
    path('messages/', MessageCreateAPIView.as_view())
]


