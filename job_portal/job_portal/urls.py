from django.contrib import admin
from django.urls import path
from job_portal.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homePage', homePage, name='homePage'),
]