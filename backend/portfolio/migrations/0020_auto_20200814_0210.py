# Generated by Django 3.0.7 on 2020-08-13 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0019_auto_20200814_0148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='type',
            field=models.IntegerField(choices=[(1, 'Website'), (2, 'API'), (3, 'Mobile application'), (8, 'Web scraping'), (5, 'Library'), (6, 'Bot'), (7, 'Script'), (8, 'Web Scrapping')]),
        ),
    ]
