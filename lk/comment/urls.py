from django.urls import path

from .views import –°ommentAPIList

urlpatterns = [
    path('api/v1/comments/', –°ommentAPIList.as_view()),
]
