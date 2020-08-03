FROM python:3.6
LABEL maintainer='Eyob Tariku'

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code
COPY Pipfile* ./
RUN apt-get update -y && apt-get install netcat -y && \
    pip install --upgrade pip && \
    pip install pipenv && \
    pipenv install --system
COPY  . .

EXPOSE 8000
