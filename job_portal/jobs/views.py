from django.shortcuts import render
from django.db.models import Q
from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import Job, Application
from .permissions import IsRecruiter, IsSeeker, IsJobOwner
from .serializers import (JobSerializer, ApplicationSerializer, ApplicationStatusSerializer)


class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer

    def get_permissions(self):
        if self.action in ('list', 'retrieve'):
            return [AllowAny()]                  # public
        return [IsRecruiter(), IsJobOwner()]     # recruiter only

    def get_queryset(self):
        qs = Job.objects.select_related('recruiter')
        if self.action in ('list', 'retrieve'):
            qs = qs.filter(is_active=True)
            p = self.request.query_params
            search = p.get('search')
            location = p.get('location')
            job_type = p.get('job_type')
            if search:
                qs = qs.filter(Q(title__icontains=search) | Q(company_name__icontains=search))
            if location:
                qs = qs.filter(location__icontains=location)
            if job_type:
                qs = qs.filter(job_type=job_type)
        return qs

    def perform_create(self, serializer):
        serializer.save(recruiter=self.request.user)

    @action(detail=False, methods=['get'], url_path='my-jobs')
    def my_jobs(self, request):
        jobs = Job.objects.filter(recruiter=request.user)
        return Response(self.get_serializer(jobs, many=True).data)


class ApplyView(generics.CreateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsSeeker]
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer):
        job = get_object_or_404(Job, pk=self.kwargs['job_id'], is_active=True)
        if job.deadline and job.deadline < timezone.localdate():
            raise ValidationError("The deadline for this job has expired.")
        if Application.objects.filter(job=job, applicant=self.request.user).exists():
            raise ValidationError("You have already applied for this job.")
        serializer.save(job=job, applicant=self.request.user)


class MyApplicationsView(generics.ListAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsSeeker]

    def get_queryset(self):
        return (Application.objects
                .filter(applicant=self.request.user)
                .select_related('job'))


class JobApplicantsView(generics.ListAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [IsRecruiter]

    def get_queryset(self):
        job = get_object_or_404(Job, pk=self.kwargs['job_id'],
                                recruiter=self.request.user)
        return job.applications.select_related('applicant', 'job')


class ApplicationStatusUpdateView(generics.UpdateAPIView):
    serializer_class = ApplicationStatusSerializer
    permission_classes = [IsRecruiter]
    http_method_names = ['patch']

    def get_queryset(self):
        return Application.objects.filter(job__recruiter=self.request.user)