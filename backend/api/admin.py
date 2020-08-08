from django.contrib import admin

from .models import Skill


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('title', 'score', 'is_published')
    list_filter = ('is_published', )
    search_fields = ('title', )
