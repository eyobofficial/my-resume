from django.conf import settings
from django.core.management import BaseCommand, call_command


class Command(BaseCommand):
    help = 'Run all start-up fixtures from the settings file.'

    def handle(self, *args, **kwargs):
        for fixture in settings.FIXTURES:
            call_command('loaddata', fixture)
