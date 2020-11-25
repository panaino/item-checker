FROM httpd
COPY ./index.html /usr/local/apache2/htdocs/index.html
COPY ./main.js /usr/local/apache2/htdocs/
COPY ./style.css /usr/local/apache2/htdocs/
