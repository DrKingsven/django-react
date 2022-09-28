from rest_framework import serializers
from django_filters import rest_framework as filters
from .models import NewComment


class NewCommentSerializer(serializers.ModelSerializer):
    # refUsers = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = NewComment
        fields = ("id", "refTask", "commentContent", "dateTime", "author")


class CharFilterInFilter(filters.BaseInFilter):
    pass


class CommentFilter(filters.FilterSet):
    refUsers = CharFilterInFilter(field_name='refTask', lookup_expr='in')

    class Meta:
        model = NewComment
        fields = ("refTask",)

# to_internal_value
