from wsgiref import headers

import requests
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, viewsets, serializers, status, permissions
from rest_framework.decorators import action
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.utils import json

from .serializers import NewCommentSerializer, CommentFilter
from .models import NewComment


class NewCommentAPIList(generics.ListCreateAPIView):
    queryset = NewComment.objects.all()
    serializer_class = NewCommentSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CommentFilter
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        request = request.data
        response = requests.post('http://127.0.0.1:8000/api/v1/users/', data = {"data" : request})

        print(response.status_code)

        # request = request.data
        for numper in range(len(request)):
            print(request)
            self.create(request[numper], *args, **kwargs)
        return Response(request, status=status.HTTP_201_CREATED)


class TaskAPIUpdate(generics.UpdateAPIView):
    queryset = NewComment.objects.all()
    serializer_class = NewCommentSerializer


# ///////////////////////////////////////////////////////////



# Запрос задач на конкретного пользователя


