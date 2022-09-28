from django.urls import path

from .views import *

urlpatterns = [
    path('api/v1/profilusers/', ProfiluserAPIList.as_view()),
    path('api/v1/profiluser/<uuid:id>/', dispatchhistoryitemsview.as_view(), name='dispatchhistoryitem')


]
