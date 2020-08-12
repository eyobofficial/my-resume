# Generated by Django 3.0.7 on 2020-08-12 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0008_auto_20200812_0643'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='type',
            field=models.IntegerField(choices=[(1, 'Website'), (2, 'API'), (3, 'Mobile application'), (4, 'Web scraping'), (5, 'Library'), (6, 'Bot')]),
        ),
        migrations.AlterField(
            model_name='projectphoto',
            name='photo',
            field=models.ImageField(height_field='photo_height', help_text='Recommended size is 870x580 px.', upload_to='', width_field='photo_width'),
        ),
    ]