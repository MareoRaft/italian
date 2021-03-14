I originally wrote these websites so that myself and other people could learn italian.  It covers the material I learned in high school.  The original was hosted on http://www.freewebs.com/the4wizkids/italian.htm.  The current version is hosted on http://learnnation.org/italian/1.html.

My goal now is simply to

  * make the code a bit smarter
  * fix a few typos and italian grammar errors
  * store this safely on GitHub
  * See if Scopa ever worked?  --> it didn't
  * add some more material, but more of a place to store notes than anything else

## install (dev)

    python3 $(which pip) install Jinja2==2.11.2
    npm install
    npm install --global browserify npm-watch

## build
To generate the html and js files, run `python3 build.py`, which outputs to _build.  This is the final output that can be hosted.

## deploy
To deploy to PROD, build the project and then copy the `_build` dir to the `static-file-server/italian` dir on the server.

    python3 build.py
    scp -r _build/italian/. freebsd@${FUJI}:~/static-file-server/italian

## docker
The Docker setup is INCOMPLETE and not ready to be used.  Just use the directions above instead.
