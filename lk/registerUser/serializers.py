from rest_framework import serializers

from .models import RegisterUser


class RegisterUserSerializer(serializers.ModelSerializer):
    # refUsers = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = RegisterUser
        fields = ("id", "username", "author")

# to_internal_value
