from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from job_portal.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/', include('jobs.urls')),
    path('homePage', homePage, name='homePage'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)