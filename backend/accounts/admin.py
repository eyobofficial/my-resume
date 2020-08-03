from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    list_display = (
        'email', 'phone_number', 'is_active', 'is_staff',
        'is_superuser', 'last_login'
    )
    list_filter = ('is_active', 'is_staff', 'is_superuser')
    filter_horizontal = ('user_permissions', 'groups')
    search_fields = ('email', 'phone_number', 'first_name', 'last_name')
    fieldsets = (
        (None,
            {'fields': ('email', 'phone_number', 'password')}
        ),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions',
            {
                'fields': (
                            'is_staff', 'is_active', 'is_superuser',
                            'groups', 'user_permissions'
                        )
            }
        ),
        ('Dates', {'fields': ('last_login', 'date_joined')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 'phone_number', 'password1',
                'password2', 'is_staff', 'is_active'
            )}
        ),
    )
    ordering = ('email',)

