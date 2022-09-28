import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    refClient = models.ManyToManyField("profiluser.Profiluser")

    author = models.CharField(verbose_name="Фио", max_length=50)

    status = models.CharField(verbose_name="Статус", max_length=50)


def __str__(self):
    return self.id
