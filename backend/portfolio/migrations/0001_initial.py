# Generated by Django 3.0.7 on 2020-08-13 23:28

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=120)),
                ('slug', models.SlugField(unique=True)),
                ('summary', models.TextField(verbose_name='short summary')),
                ('description', models.TextField(blank=True)),
                ('type', models.IntegerField(choices=[(1, 'Website'), (2, 'API'), (3, 'Mobile application'), (8, 'Web scraping'), (5, 'Library'), (6, 'Bot'), (7, 'Script'), (8, 'Web Scrapping')])),
                ('private', models.BooleanField(default=False)),
                ('date', models.DateField()),
                ('project_url', models.URLField(blank=True)),
                ('repository', models.URLField(blank=True)),
                ('thumbnail', models.ImageField(height_field='thumbnail_height', help_text='Recommended size is 429x286 px.', upload_to='', width_field='thumbnail_width')),
                ('video', models.URLField(blank=True)),
                ('facebook', models.URLField(blank=True, default='', verbose_name='facebook link')),
                ('twitter', models.URLField(blank=True, default='', verbose_name='twitter link')),
                ('linkedIn', models.URLField(blank=True, default='', verbose_name='linkedIn link')),
                ('featured', models.BooleanField(default=False)),
                ('is_published', models.BooleanField(default=False, verbose_name='published')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('thumbnail_height', models.IntegerField(blank=True, null=True)),
                ('thumbnail_width', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Past Project',
                'verbose_name_plural': 'Past Projects',
                'ordering': ('-featured', '-date'),
            },
        ),
        migrations.CreateModel(
            name='Technology',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
            ],
            options={
                'verbose_name': 'Technology',
                'verbose_name_plural': 'Technologies',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=120, verbose_name='full name')),
                ('title', models.CharField(max_length=120, verbose_name='client title')),
                ('photo', models.ImageField(blank=True, height_field='photo_height', help_text='Recommended size is 80x80 px.', null=True, upload_to='', width_field='photo_width')),
                ('testimony', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('is_published', models.BooleanField(default=False, verbose_name='published')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('photo_width', models.IntegerField(blank=True, null=True)),
                ('photo_height', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'ordering': ('-featured', '-created_at'),
            },
        ),
        migrations.CreateModel(
            name='ProjectPhoto',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=120)),
                ('photo', models.ImageField(height_field='photo_height', help_text='Recommended size is 870x580 px.', upload_to='', width_field='photo_width')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('photo_height', models.IntegerField(blank=True, null=True)),
                ('photo_width', models.IntegerField(blank=True, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='portfolio.Project')),
            ],
            options={
                'verbose_name': 'Project Photo',
                'verbose_name_plural': 'Project Photos',
                'ordering': ('created_at',),
            },
        ),
        migrations.AddField(
            model_name='project',
            name='technologies',
            field=models.ManyToManyField(to='portfolio.Technology'),
        ),
    ]
