import django_filters
from rest_framework import serializers
from .models import Сomment
from django_filters import rest_framework as filters


class СommentSerializer(serializers.ModelSerializer):
    # refUsers = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Сomment
        fields = ("id", "refTask", "commentContent", "dateTime", "author", "numberLine")


class CharFilterInFilter(filters.BaseInFilter):
    pass


class CommentFilter(filters.FilterSet):
    refTask = CharFilterInFilter(field_name='refTask__id', lookup_expr='in')

    class Meta:
        model = Сomment
        fields = ("refTask",)

# to_internal_value
