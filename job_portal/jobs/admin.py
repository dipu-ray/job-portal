from django.contrib import admin
from .models import Job, Application


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'company_name', 'recruiter', 'job_type', 'is_active', 'created_at')
    list_filter = ('job_type', 'is_active')
    search_fields = ('title', 'company_name')


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('applicant', 'job', 'status', 'applied_at')
    list_filter = ('status',)