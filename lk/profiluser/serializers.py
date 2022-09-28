from rest_framework import serializers
from django_filters import rest_framework as filters

from .models import Profiluser


class ProfiluserSerializer(serializers.ModelSerializer):
    # refUsers = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Profiluser
        fields = ("id", "title", "holding",
                  "block", "form_clients_work", "type_payment",
                  "client_address", "email_address", "counterparty_inn",
                  "cost_hour",)


class CharFilterInFilter(filters.BaseInFilter):
    pass


class ProfiluserFilter(filters.FilterSet):
    id = CharFilterInFilter(field_name='id', lookup_expr='in')

    class Meta:
        model = Profiluser
        fields = ("id",)

# to_internal_value

# to_internal_value
