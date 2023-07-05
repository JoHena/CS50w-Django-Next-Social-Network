from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework import viewsets
from rest_framework import generics

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django_filters.rest_framework import DjangoFilterBackend

from base.models import Post, User
from base.api.serializers import PostSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["username"]

    """
    Follow a user and add it to that user's followers.
    """

    @action(detail=True, methods=["patch"])
    def follow(self, request, pk=None):
        user = User.objects.get(pk=pk)
        new_follower = User.objects.get(id=request.data["user"])

        if user.profile.followers.filter(username=new_follower).exists():
            user.profile.followers.remove(new_follower)
            new_follower.profile.followings.remove(user)
            return Response({"message": "Already following"})
        else:
            user.profile.followers.add(new_follower)
            new_follower.profile.followings.add(user)
            return Response({"message": "Follow successful"})


# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """

    serializer_class = PostSerializer
    queryset = Post.objects.all().order_by("-created_at")
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["user"]

    """
    Returns all the posts that the user is following.
    """

    @action(detail=True, methods=["get"])
    def getFollowers(self, request, pk=None):
        user = User.objects.get(pk=pk)
        followings = user.profile.followings.all()
        followingPosts = Post.objects.filter(user__id__in=followings)

        page = self.paginate_queryset(followingPosts)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(followingPosts, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=["patch"])
    def likePost(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        user = User.objects.get(id=request.data["user"])
        serializer = self.get_serializer(post, many=False)

        if post.likes.filter(username=user).exists():
            post.likes.remove(user)
            return Response(
                {
                    "message": "Like removed",
                    "total_likes": serializer.data["total_likes"],
                    "likes": serializer.data["likes"],
                }
            )
        else:
            post.likes.add(user)
            return Response(
                {
                    "message": "Post liked",
                    "total_likes": serializer.data["total_likes"],
                    "likes": serializer.data["likes"],
                }
            )


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["name"] = user.username
        token["followings"] = list(
            user.profile.followings.all().values_list("id", flat=True)
        )
        token["followers"] = list(
            user.profile.followers.all().values_list("id", flat=True)
        )
        # ...
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
