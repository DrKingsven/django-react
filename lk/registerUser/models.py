import uuid

from django.db import models


class RegisterUser(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(max_length=11, verbose_name="Телефон")
    author = models.CharField(max_length=250, verbose_name="Телефон")



def __str__(self):
    return self.id
