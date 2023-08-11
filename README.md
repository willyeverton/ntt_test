# ntt_test

After downloading this repository, run 'composer install' command to install project dependencies

Run the command 'docker-compose up -d' to create the container.
        To create the container it is necessary that the docker installed in your system.

Access the url http://localhost:8080/ and install Drupal on your local machine.

Select the MySQL database.
Database name: drupal
Database username: drupal
Database password: drupal
Host: ntt_test_mysql_1 (run 'docker ps' command and get mysql IMAGE NAME in my case it's ntt_test_mysql_1)

if there is the error in mysqli, run the commands below to install mysqli in your container:
'docker exec -it ntt_test_drupal_1 sh' to access the container shell
'docker-php-ext-install mysqli'
'docker-php-ext-enable mysqli'
'apachectl restart'

To install drush in the container run:
'docker exec -it ntt_test_drupal_1 sh' to access the container shell
'composer requires drush/drush'