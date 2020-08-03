from .base import *
from decouple import config, Csv


DEBUG = False
ALLOWED_HOSTS = config('ALLOWED_HOSTS', cast=Csv())
