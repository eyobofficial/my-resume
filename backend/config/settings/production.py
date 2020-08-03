from .base import *


DEBUG = False
ALLOWED_HOSTS = config('ALLOWED_HOSTS', cast=Csv())
