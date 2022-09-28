import uuid

from django.db import models
from django.db.models import CASCADE


class Сomment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True, unique=True)
    refTask = models.ForeignKey("task.Task", on_delete=CASCADE)
    commentContent = models.CharField(max_length=10000, verbose_name="Текст комментария")
    dateTime = models.CharField(max_length=250, verbose_name="Дата")
    author = models.CharField(max_length=250, verbose_name="Автор")
    numberLine = models.CharField(max_length=250, verbose_name="Номер комментария")
