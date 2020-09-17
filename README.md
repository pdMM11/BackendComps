In order to run the aplication locally, one must use the command docker pull for each of the three images, create a network, and run the three containers, with the caveat that both MySQL and Django must be in the same network and for each container must define the port (where MySQL is expected to be 3307:3306, Django 8000:8000 and Angular 4201:4200). Finally, the MySQL one must be called “django\_\_db\_1”, in order to match the settings of the Django container.

The files regarding the settings of the Django app are inserted into /my-app-dir/crmapp within the container itself.  
