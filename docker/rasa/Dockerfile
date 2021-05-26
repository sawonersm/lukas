from debian:10

RUN apt-get update -y 
RUN apt-get install -y build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev wget

# Install python (Compiling from source)
# RUN wget https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tgz -P /tmp
# RUN cd /tmp && tar -xf Python-3.8.2.tgz
# RUN cd /tmp/Python-3.8.2 && ./configure --enable-optimizations && make && make install

# Install python (from APT)
RUN apt-get install -y python3

# Install pip 3
RUN apt-get install -y python3-pip

# Install Rasa
RUN pip3 install -U pip
RUN pip3 install -U rasa

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]