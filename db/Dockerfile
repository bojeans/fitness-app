# Use an official PostgreSQL image as a base image
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=$POSTGRES_DB
ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD

# Copy initialization scripts to the container
COPY init.sql /docker-entrypoint-initdb.d/
