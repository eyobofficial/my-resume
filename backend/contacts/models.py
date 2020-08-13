from django.db import models


class Message(models.Model):
    """
    User message
    """
    name = models.CharField('full name', max_length=120)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    is_seen  = models.BooleanField('seen', default=False)

    class Meta:
        ordering = ('-sent_at', )

    def __str__(self):
        return self.subject


class Subscription(models.Model):
    """
    User newsletter e-mail subscription.
    """
    email = models.EmailField(unique=True)
    is_subscribed = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at', )
        verbose_name = 'E-mail subscription'
        verbose_name_plural = 'E-mail subscriptions'

    def __str__(self):
        return self.email
