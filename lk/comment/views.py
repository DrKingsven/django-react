from rest_framework import generics, status, permissions
from rest_framework.response import Response

from .models import Сomment
from .serializers import СommentSerializer, CommentFilter
from django_filters.rest_framework import DjangoFilterBackend


class СommentAPIList(generics.ListCreateAPIView):
    queryset = Сomment.objects.all()
    serializer_class = СommentSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CommentFilter
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        request = request.data
        for number in range(len(request)):
            self.create(request[number], *args, **kwargs)
        return Response(request, status=status.HTTP_201_CREATED)
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # task = self.request.task.id  # тут значение приходит
        return Сomment.objects.all()  # тут выводит все данные где в поле совпадает значение

