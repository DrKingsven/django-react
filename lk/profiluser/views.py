from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views import View
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, status, permissions
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response

from .models import Profiluser
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .serializers import ProfiluserSerializer


class ProfiluserAPIList(generics.ListCreateAPIView):
    queryset = Profiluser.objects.all()
    serializer_class = ProfiluserSerializer
    filter_backends = (DjangoFilterBackend,)
    permission_classes = [permissions.IsAuthenticated]



    # permission_classes = [permissions.IsAuthenticated]
    def post(self, request, *args, **kwargs):
        request = request.data
        for number in range(len(request)):
            self.create(request[number], *args, **kwargs)
        return Response(request, status=status.HTTP_201_CREATED)


# Запрос задач на конкретного пользователя
class dispatchhistoryitemsview(RetrieveAPIView):
    queryset = Profiluser.objects.all()
    filter_backends = (DjangoFilterBackend,)
    serializer_class = ProfiluserSerializer
    permission_classes = [permissions.IsAuthenticated]

    lookup_field = "id"

    def get_queryset(self):


        return Profiluser.objects.all()




#     def get_queryset(self):
#         return Profiluser.objects.all()



class ProfiluserAPIUpdate(generics.UpdateAPIView):
    queryset = Profiluser.objects.all()
    serializer_class = ProfiluserSerializer
