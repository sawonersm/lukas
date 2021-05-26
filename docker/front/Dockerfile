from debian:10

RUN apt-get update -y 
RUN apt-get install -y wget curl


RUN apt-get install -y nginx
COPY ./nginx/default /etc/nginx/sites-enabled/default

RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
RUN apt-get install -y nodejs
RUN npm install --global yarn

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]