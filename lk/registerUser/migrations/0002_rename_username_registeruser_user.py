# Generated by Django 4.0.4 on 2022-09-13 12:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registerUser', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registeruser',
            old_name='username',
            new_name='user',
        ),
    ]
