# Use an official PostgreSQL image as a base image
FROM postgres:latest

# Set build-time arguments
ARG POSTGRES_DB
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT

# Set environment variables
ENV POSTGRES_DB=$POSTGRES_DB
ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV POSTGRES_PORT=$POSTGRES_PORT

# Copy initialization scripts to the container
COPY init.sql /docker-entrypoint-initdb.d/
COPY init-users.sql /docker-entrypoint-initdb.d/
