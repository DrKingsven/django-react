from django.urls import path

from .views import *

urlpatterns = [
    path('api/v1/tasks/', TaskAPIList.as_view()),
    # path('api/v1/task/', dispatchhistoryitemsview.as_view()),
    # path('api/v1/tasks/<uuid:id>/', TaskAPIUpdate.as_view()),
    # path('api/v1/tasks/completed/', TaskAPIListCompleted.as_view()),
    # path('api/v1/tasks/pogress/', TaskAPIListPogress.as_view())

]
