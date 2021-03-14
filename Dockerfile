# Not yet in use.  But merely because I haven't gotten around to it yet.

# FROM python:3.9.2-slim-buster
FROM imton/node-python

WORKDIR /home/matt/work

RUN pip3 install Jinja2==2.11.2
RUN npm install
RUN npm install --global browserify@17.0.0

COPY build.py .
COPY utils.py .
COPY vars.py .
COPY source ./source

CMD ["python3", "build.py"]



