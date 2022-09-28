from rest_framework import serializers
from django_filters import rest_framework as filters
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    # refUsers = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Task
        fields = ("id", "refUsers", "priority", "numberTask", "executor",
                  "due_date", "cost_of_work", "get_started",
                  "formulation_task", "counterparty", "counterparty_inn",
                  "status", "date", "author")



class CharFilterInFilter(filters.BaseInFilter):
    pass


class TaskFilter(filters.FilterSet):
    refUsers = CharFilterInFilter(field_name='refUsers', lookup_expr='in')

    class Meta:
        model = Task
        fields = ("refUsers",)

# to_internal_value
