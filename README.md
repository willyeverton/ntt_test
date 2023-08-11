# ntt_test

After downloaded this repositorie, execute the command 'composer install' to install dependencies from project

Execute the command 'docker-compose up -d' to create de containner.
    For create the containner is necessarie of the docket instalet in your sistem.

Access de url http://localhost:8080/ and install de Drupal in you local machine.

Select the MySQL database.
Database name: drupal
Database username: drupal
Database password: drupal
Host: ntt_test_mysql_1 (execute de comamnd 'docker ps' and get the NAME of IMAGE mysql in my case is ntt_test_mysql_1)

if there is the error in mysqli, execute de commands bellow to install the mysqli in your containner:
'docker exec -it ntt_test_drupal_1 sh'
'docker-php-ext-install mysqli'