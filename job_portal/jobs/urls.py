from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (JobViewSet, ApplyView, MyApplicationsView, JobApplicantsView, ApplicationStatusUpdateView)

router = DefaultRouter()
router.register('jobs', JobViewSet, basename='job')

urlpatterns = [
    path('jobs/<int:job_id>/apply/', ApplyView.as_view(), name='job-apply'),
    path('jobs/<int:job_id>/applicants/', JobApplicantsView.as_view(), name='job-applicants'),
    path('applications/my/', MyApplicationsView.as_view(), name='my-applications'),
    path('applications/<int:pk>/status/', ApplicationStatusUpdateView.as_view(), name='application-status'),
    path('', include(router.urls)),
]