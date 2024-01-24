# Use an official PostgreSQL image as a base image
FROM postgres:latest

COPY init.sql /docker-entrypoint-initdb.d/
COPY init-users.sql /docker-entrypoint-initdb.d/
