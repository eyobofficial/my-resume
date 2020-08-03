#!/bin/bash

# Run migrations
echo 'Run migrations...'
python manage.py makemigrations  # TODO: Remove in production

# Run all tests
echo 'Run tests...'
python manage.py test --verbosity 2 --no-input
