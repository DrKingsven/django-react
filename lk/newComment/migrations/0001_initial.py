# Generated by Django 4.0.4 on 2022-09-14 08:44

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewComment',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('commentContent', models.CharField(max_length=10000, verbose_name='Текст комментария')),
                ('dateTime', models.CharField(max_length=250, verbose_name='Дата')),
                ('author', models.CharField(max_length=250, verbose_name='Автор')),
                ('refTask', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='task.task')),
            ],
        ),
    ]
