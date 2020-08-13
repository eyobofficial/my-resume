from django.urls import path

from .views import MessageCreateAPIView, SubscriptionCreateAPIView


app_name = 'contacts'

urlpatterns = [
    path('messages/', MessageCreateAPIView.as_view()),
    path('subscriptions/', SubscriptionCreateAPIView.as_view())
]


