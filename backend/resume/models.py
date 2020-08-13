import uuid

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Education(models.Model):
    """
    Education history.
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    institute = models.CharField(
        max_length=120,
        help_text='Educational institution. Example: College, University, etc'
    )
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    year = models.IntegerField()
    is_published = models.BooleanField(default=False)

    class Meta:
        ordering = ('-year', )
        verbose_name = 'Educational History'
        verbose_name_plural = 'Education History'

    def __str__(self):
        return self.title


class Experience(models.Model):
    """
    Work experience history.
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    place = models.CharField('work place', max_length=120)
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    start = models.IntegerField('start year')
    end = models.IntegerField('end date', blank=True, null=True)
    still_working = models.BooleanField(default=False)
    is_published = models.BooleanField(default=False)

    class Meta:
        ordering = ('-still_working', '-end', '-start')
        verbose_name = 'Work Experience'
        verbose_name_plural = 'Work Experiences'

    def __str__(self):
        return self.title


class Certificate(models.Model):
    """
    Awarded certificates.
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    title = models.CharField(max_length=120)
    institute = models.CharField(
        max_length=120,
        help_text='Training institution. Example: College, University, etc'
    )
    icon = models.ImageField(
        null=True, blank=True,
        width_field='icon_width',
        height_field='icon_height',
        help_text='Recommended size is 70x21 px.'
    )
    date = models.DateField()
    link = models.URLField()
    is_published = models.BooleanField(default=False)

    # Image width & height fields
    icon_width = models.IntegerField(null=True, blank=True)
    icon_height = models.IntegerField(null=True, blank=True)

    class Meta:
        ordering = ('date', )
        verbose_name = 'Awarded Certificate'
        verbose_name = 'Awarded Certificates'

    def __str__(self):
        return self.title


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
        (FRONTEND, 'Frontend'),
        (BACKEND, 'Backend'),
        (DEVOPS, 'DevOps')
    )

    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    title = models.CharField(max_length=120)
    score = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)]
    )
    type = models.IntegerField(choices=SKILL_TYPES)
    description = models.TextField(blank=True)
    featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=False)
    order = models.IntegerField(null=True)

    class Meta:
        ordering = ('order', 'title')

    def __str__(self):
        return self.title
