import uuid

from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models
from django.conf import settings


# from lk.users.models import CustomUser
from django.db.models import CASCADE, DO_NOTHING


class NewComment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True, unique=True)
    refTask = models.ForeignKey("task.Task", on_delete=CASCADE)
    commentContent = models.CharField(max_length=10000, verbose_name="Текст комментария")
    dateTime = models.CharField(max_length=250, verbose_name="Дата")
    author = models.CharField(max_length=250, verbose_name="Автор")



def __str__(self):
    return self.refTask
