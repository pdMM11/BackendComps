FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /my_app_dir
WORKDIR /my_app_dir
ADD requirements_django.txt /my_app_dir/
RUN pip install --upgrade pip && pip install -r requirements_django.txt
RUN apt-get update && apt-get install -y clustalo
ADD . /my_app_dir/
ENTRYPOINT ["python","manage.py runserver"]
EXPOSE 8000
