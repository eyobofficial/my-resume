# Generated by Django 3.0.7 on 2020-08-08 20:48

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0004_auto_20200808_2307'),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('institute', models.CharField(help_text='Educational institute. Example: College, University, etc', max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True)),
                ('year', models.DateField()),
            ],
            options={
                'verbose_name': 'Educational History',
                'verbose_name_plural': 'Education History',
                'ordering': ('-year',),
            },
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('place', models.CharField(max_length=120, verbose_name='work place')),
                ('title', models.CharField(max_length=120)),
                ('start', models.DateField(verbose_name='start date')),
                ('end', models.DateField(blank=True, null=True, verbose_name='end date')),
                ('still_working', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Work Experience',
                'verbose_name_plural': 'Work Experiences',
                'ordering': ('-still_working', '-end', '-start'),
            },
        ),
    ]
