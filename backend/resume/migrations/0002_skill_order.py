# Generated by Django 3.0.7 on 2020-08-08 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='order',
            field=models.IntegerField(null=True),
        ),
    ]
