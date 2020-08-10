import uuid
from django.db import models


class Technology(models.Model):
    """
    Technology stacks.
    Example: Programming languages, frameworks, platforms, etc
    """
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ('name', )
        verbose_name = 'Technology'
        verbose_name_plural = 'Technologies'

    def __str__(self):
        return self.name


class Project(models.Model):
    """
    Portfolio projects.
    """

    # Project types
    WEBSITE = 1
    API = 2
    MOBILE = 3
    SCRAPING = 4
    LIBRARY = 5

    PROJECT_TYPES = (
        (WEBSITE, 'Website'),
        (API, 'API'),
        (MOBILE, 'Mobile application'),
        (SCRAPING, 'Web scraping'),
        (LIBRARY, 'Library')
    )

    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    name = models.CharField(max_length=120)
    summary = models.TextField('short summary')
    description = models.TextField(blank=True)
    technologies = models.ManyToManyField(Technology)
    type = models.IntegerField(choices=PROJECT_TYPES)
    private = models.BooleanField(default=False)
    date = models.DateField()
    featured = models.BooleanField(default=False)
    url = models.URLField(blank=True)
    respository = models.URLField(blank=True)
    thumbnail = models.ImageField()
    video = models.URLField(blank=True)
    is_published = models.BooleanField('published', default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-featured', '-date')
        verbose_name = 'Past Project'
        verbose_name_plural = 'Past Projects'

    def __str__(self):
        return self.name


class ProjectPhoto(models.Model):
    """
    Portfolio project pictures.
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    project = models.ForeignKey(
        Project,
        related_name='photos',
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=120)
    photo = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created_at', )
        verbose_name = 'Project Photo'
        verbose_name_plural = 'Project Photos'

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    """
    Past client testimonials.
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    name = models.CharField('full name', max_length=120)
    title = models.CharField('client title', max_length=120)
    photo = models.ImageField()
    testimony = models.TextField()
    featured = models.BooleanField(default=False)
    is_published = models.BooleanField('published', default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-featured', '-created_at')

    def __str__(self):
        return self.name
