from django.contrib import admin

from .models import Education, Experience, Certificate, Skill


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('title', 'institute', 'year', 'is_published')
    list_filter = ('is_published', )
    search_fields = ('title', )


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'place', 'start',
        'end', 'still_working', 'is_published'
    )
    list_filter = ('is_published', )
    search_fields = ('title', )


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('title', 'institute', 'date', 'is_published')
    list_filter = ('is_published', )


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('title', 'score', 'is_published', 'order')
    list_editable = ('score', 'order')
    list_filter = ('is_published', )
    search_fields = ('title', )
