# Generated by Django 4.0.4 on 2022-09-14 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newTask', '0002_remove_newtask_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='newtask',
            name='author',
            field=models.CharField(default=4335, max_length=250, verbose_name='Автор'),
            preserve_default=False,
        ),
    ]