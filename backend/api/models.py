import uuid

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Skill(models.Model):
    """
    Programming or coding skillsets.
    """

    # Skill Types
    DESIGN   = 1
    FRONTEND = 2
    BACKEND  = 3
    DEVOPS   = 4

    # Skill type choices
    SKILL_TYPES = (
        (DESIGN, 'UI/UX'),
        (FRONTEND, 'Frontend')
        (BACKEND, 'Backend'),
        (DEVOPS, 'DevOps')
    )

    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    title = models.CharField(max_length=120)
    score = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)]
    )
    type = modele.IntegerField(choices=SKILL_TYPES)
    description = models.TextField(blank=True)
    is_published = models.BooleanField(default=False)

    class Meta:
        ordering = ('title', )

    def __str__(self):
        return self.title
