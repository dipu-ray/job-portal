from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('Seeker', 'Job Seeker'),
        ('Recruiter', 'Recruiter'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='Seeker')

    def __str__(self):
        return f"{self.username} ({self.role})"