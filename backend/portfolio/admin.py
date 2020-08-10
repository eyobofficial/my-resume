from django.contrib import admin

from .models import Technology, Project, ProjectPhoto, Testimonial


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name', )


class ProjectPhotoInline(admin.TabularInline):
    model = ProjectPhoto


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'type', 'date',
        'private', 'featured', 'is_published'
    )
    list_filter = ('private', 'featured', 'is_published')
    inlines = [ProjectPhotoInline]
    filter_horizontal = ('technologies', )
    search_fields = ('name', 'summary', 'description')


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'featured', 'is_published', 'created_at')
    list_filter = ('featured', 'is_published')
    search_fields = ('name', 'testimony')
