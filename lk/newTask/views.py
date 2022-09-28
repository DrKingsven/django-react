from wsgiref import headers

import requests
from django.db.migrations import serializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, viewsets, serializers, status, permissions
from rest_framework.decorators import action
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.utils import json

from .serializers import NewTaskSerializer, TaskFilter
from .models import NewTask


class NewTaskAPIList(generics.ListCreateAPIView):
    queryset = NewTask.objects.all()
    serializer_class = NewTaskSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TaskFilter
    permission_classes = [permissions.IsAuthenticated]


    def post(self, request, *args, **kwargs):
        request = request.data
        response = requests.post('http://userhttp:123@192.168.1.10/taskmanager/hs/ExchangeSUZnew/dokumentsnew', data = {"data" : request})

        print(response.status_code)

        # request = request.data
        for numper in range(len(request)):
            print(request)
            self.create(request[numper], *args, **kwargs)
        return Response(request, status=status.HTTP_201_CREATED)
class TaskAPIUpdate(generics.UpdateAPIView):
    queryset = NewTask.objects.all()
    serializer_class = NewTaskSerializer
# ///////////////////////////////////////////////////////////
# Запрос задач на конкретного пользователя


