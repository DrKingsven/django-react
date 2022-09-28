from rest_framework import serializers
from django_filters import rest_framework as filters
from .models import NewTask


class NewTaskSerializer(serializers.ModelSerializer):
    # refUsers = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = NewTask
        fields = ("id", "refUsers", "priority",
                  "due_date", "author",
                  "formulation_task", "counterparty", "counterparty_inn",
                  "status", "date")



class CharFilterInFilter(filters.BaseInFilter):
    pass


class TaskFilter(filters.FilterSet):
    refUsers = CharFilterInFilter(field_name='refUsers', lookup_expr='in')

    class Meta:
        model = NewTask
        fields = ("refUsers",)

# to_internal_value
