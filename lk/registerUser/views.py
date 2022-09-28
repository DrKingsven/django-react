import requests
from django.shortcuts import render, redirect
import json
from django.http import JsonResponse
from django.views import View
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import RegisterUser

from .serializers import RegisterUserSerializer


class RegisterUserAPIList(generics.ListAPIView):
    queryset = RegisterUser.objects.all()
    serializer_class = RegisterUserSerializer
    filter_backends = (DjangoFilterBackend,)
    permission_classes = [permissions.IsAuthenticated]

    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return RegisterUser.objects.all()


class RegisterUserCreate(APIView):
    serializer_class = RegisterUserSerializer

# Переадресацияq                                                                                                                                                              [p                                                      xd
    def post(self, request, *args, **kwargs,):
        # print(request.c)
        # params = request
        # username = request
        # print(request.data)
        # headers = {'Content-Type:text/html; charset=utf-8'}
        # author = request.author
        response = requests.get('http://127.0.0.1:8000/api/v1/tasks/', params = request.data)
        print(response)
        return Response(status=status.HTTP_201_CREATED)


