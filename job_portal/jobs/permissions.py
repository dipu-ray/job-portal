from rest_framework.permissions import BasePermission


class IsRecruiter(BasePermission):
    message = "Only work to Recruiter"
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated
                    and request.user.role == 'Recruiter')


class IsSeeker(BasePermission):
    message = "Only application to Job Seeker"
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated
                    and request.user.role == 'Seeker')


class IsJobOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.recruiter == request.user