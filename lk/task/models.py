import uuid

from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models
from django.conf import settings


# from lk.users.models import CustomUser
from django.db.models import CASCADE, DO_NOTHING


class Task(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True, unique=True, verbose_name="id задачи")
    refUsers = models.ForeignKey("profiluser.Profiluser", on_delete=CASCADE)
    numberTask = models.CharField(max_length=250, verbose_name="Номер задачи")
    executor = models.CharField(max_length=250, verbose_name="Исполнитель")
    due_date = models.CharField(max_length=250, verbose_name="Срок выполнения задачи")
    cost_of_work = models.CharField(max_length=250, verbose_name="Цена работы")
    get_started = models.CharField(max_length=250, verbose_name="Дата начала работы")
    formulation_task = models.TextField(verbose_name="Формулировка задачи")
    counterparty = models.CharField(max_length=250, verbose_name="Контрагент")
    counterparty_inn = models.CharField(max_length=250, verbose_name="ИНН")
    status = models.CharField(max_length=250, verbose_name="Статус")
    date = models.CharField(max_length=250, verbose_name="Дата окончания")
    priority = models.CharField(max_length=250, verbose_name="Приоритет")
    author = models.CharField(max_length=250, verbose_name="Автор")




def __str__(self):
    return self.refUsers
