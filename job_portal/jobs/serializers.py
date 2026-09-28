from django.utils import timezone
from rest_framework import serializers
from .models import Job, Application

MAX_RESUME_SIZE = 5 * 1024 * 1024


class JobSerializer(serializers.ModelSerializer):
    recruiter_name = serializers.CharField(source='recruiter.username', read_only=True)
    applications_count = serializers.IntegerField(source='applications.count', read_only=True)

    class Meta:
        model = Job
        fields = '__all__'
        read_only_fields = ('recruiter', 'created_at', 'updated_at')

    def validate_deadline(self, value):
        if value and value < timezone.localdate():
            raise serializers.ValidationError("The deadline cannot be before today.")
        return value

    def validate(self, attrs):
        smin = attrs.get('salary_min', getattr(self.instance, 'salary_min', None))
        smax = attrs.get('salary_max', getattr(self.instance, 'salary_max', None))
        if smin is not None and smax is not None and smin > smax:
            raise serializers.ValidationError("salary_min salary_max it cannot be greater than this.")
        return attrs


class ApplicationSerializer(serializers.ModelSerializer):
    job_title = serializers.CharField(source='job.title', read_only=True)
    company_name = serializers.CharField(source='job.company_name', read_only=True)
    applicant_name = serializers.CharField(source='applicant.username', read_only=True)
    applicant_email = serializers.EmailField(source='applicant.email', read_only=True)

    class Meta:
        model = Application
        fields = ('id', 'job', 'job_title', 'company_name', 'applicant', 'applicant_name', 'applicant_email', 'resume', 'cover_letter', 'status', 'applied_at')
        read_only_fields = ('job', 'applicant', 'status', 'applied_at')

    def validate_resume(self, file):
        if not file.name.lower().endswith('.pdf'):
            raise serializers.ValidationError("Only PDF files can be uploaded.")
        if file.size > MAX_RESUME_SIZE:
            raise serializers.ValidationError("File size cannot exceed 5MB.")
        header = file.read(5)
        file.seek(0)
        if header != b'%PDF-':
            raise serializers.ValidationError("This is not a valid PDF file.")
        return file


class ApplicationStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('status',)