from django.contrib import admin

from .models import Message, Subscription


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'is_seen')
    list_filter = ('is_seen', )
    readonly_fields = ('name', 'email', 'subject', 'message')
    search_fields = ('name', 'email', 'subject', 'message')


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_subscribed', 'created_at')
    list_filter = ('is_subscribed', )
    search_fields = ('email', )
