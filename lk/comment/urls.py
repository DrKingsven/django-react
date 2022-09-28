from django.urls import path

from .views import СommentAPIList

urlpatterns = [
    path('api/v1/comments/', СommentAPIList.as_view()),
]
