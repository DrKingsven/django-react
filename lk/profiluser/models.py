import uuid

from django.db import models
from django.db.models import CASCADE


class Profiluser(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=True, unique=True, verbose_name="id Профиля")
    title = models.CharField(max_length=250, verbose_name="Название")
    holding = models.CharField(max_length=250, verbose_name="Холдинг")
    block = models.CharField(max_length=250, verbose_name="Блок")
    form_clients_work = models.CharField(max_length=250, verbose_name="Форма работы")
    type_payment = models.CharField(max_length=250, verbose_name="Тип оплаты")
    client_address = models.CharField(max_length=250, verbose_name="Адрес клиента")
    email_address = models.TextField(verbose_name="Email aдрес")
    counterparty_inn = models.CharField(max_length=250, verbose_name="ИНН")
    cost_hour = models.CharField(max_length=250, verbose_name="Цена за час")


def __str__(self):
    return self.id