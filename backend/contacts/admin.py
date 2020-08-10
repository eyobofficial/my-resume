from django.contrib import admin

from .models import Message


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'is_seen')
    list_filter = ('is_seen', )
    readonly_fields = ('name', 'email', 'subject', 'message')
    search_fields = ('name', 'email', 'subject', 'message')
