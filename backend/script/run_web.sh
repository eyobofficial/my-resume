#!/bin/bash

# Check if database is ready
echo 'Waiting for database....'
while ! nc -z $DB_HOST $DB_PORT; do
    sleep 1s
done

echo 'Database is ready.'

# Prepare app
echo 'Run migrations...'
python manage.py makemigrations   # TODO: Remove in production code
python manage.py migrate --no-input

# Create a default superuser account
echo 'Create a default superuser account...'
python manage.py defaultsuperuser

# Run all fixtures
echo 'Run fixtures...'
python manage.py runfixtures

echo 'Collect static files...'
python manage.py collectstatic --no-input --clear

# Run gunicorn server
echo 'Start Gunicorn server...'
gunicorn --bind 0.0.0.0:8000 --workers 3 config.wsgi
