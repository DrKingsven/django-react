from wsgiref import headers

from django.db.migrations import serializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, viewsets, serializers, status, permissions
from rest_framework.decorators import action
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.utils import json

from .serializers import TaskSerializer, TaskFilter
from .models import Task


class TaskAPIList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TaskFilter
    permission_classes = [permissions.IsAuthenticated]


    # def get_queryset(self):
        # users = self.request.user.refClient.all()
        # print(user[0])
        # user = users[1]
        # for number in range(len(users)):
        #  print(number)
         # return Task.objects.filter().exclude(refUsers=users)
        # return Task.objects.fil#)

    # Запрос задач на конкретного пользователя
    #     def get_queryset(self):
    #         # user = self.request.user.clients
    #         # print(user)
    #         return Task.objects.filter(refUsers = "a4fcadec-67b7-449f-9992-5ebd39a29ff0")

    def post(self, request, *args, **kwargs):

        request = request.data
        for numper in range(len(request)):
            print(request)
            self.create(request[numper], *args, **kwargs)
        return Response(request, status=status.HTTP_201_CREATED)


# class dispatchhistoryitemsview(generics.ListCreateAPIView):
#     queryset = Task.objects.all()
#     filter_backends = (DjangoFilterBackend,)
#     serializer_class = TaskSerializer
#     filterset_class = TaskFilter
#
#     # lookup_field = "refUsers"
#
#     def get_queryset(self):
#         user = self.request.user.refClient.all()
#         print(user[0])
#         return Task.objects.filter(refUsers = user)
#         # return Task.objects.fil#)


class TaskAPIUpdate(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


# ///////////////////////////////////////////////////////////


class TaskAPIListCompleted(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (DjangoFilterBackend,)

    # permission_classes = [permissions.IsAuthenticated]

    # Запрос задач на конкретного пользователя
    def get_queryset(self):
        user = self.request.user.pk
        statusTask = "Выполнена"
        return Task.objects.filter(status=statusTask, refUsers=user)
        # return Task.objects.filter(refUsers=user)
        # refUsers = self.kwargs.get("refUsers")
        # if refUsers:
        #  return Task.objects.all()
        # return Task.objects.filter(refUsers="3ca8c69c-1401-4ff5-92d4-23e710c204f8")#Тут нужно присвоить значение id текущего пользователя


# Запрос задач на конкретного пользователя


class TaskAPIListPogress(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (DjangoFilterBackend,)

    # permission_classes = [permissions.IsAuthenticated]

    # Запрос задач на конкретного пользователя
    def get_queryset(self):
        user = self.request.user.pk
        statusTask = "Принята в работу"
        return Task.objects.filter(status=statusTask, refUsers=user)
