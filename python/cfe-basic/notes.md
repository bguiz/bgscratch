### Tools

sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install git git-flow sublime-text-installer
#without using PPA: download from http://www.sublimetext.com/3
#this directorycan be weherever you like, really
mkdir -p /usr/local/code
PP=$_

### In she1l 1

sudo apt-get install python-pip 
pip install django
which django-admin.py 
#expected output (not blank): /usr/local/bin/django-admin.py

### In browser

Make a new git repo called cfe-basic

### In shell 2

cd $PP
git clone git@github.com:YOUR_USERNAME/cfe-basic.git #or other URL
cd cfe-basic/
git flow init # accept defaults
Which branch should be used for bringing forth production releases?
Branch name for production releases: [master] 
Which branch should be used for integration of the "next release"?
Branch name for "next release" development: [develop] 
How to name your supporting branch prefixes?
Feature branches? [feature/] 
Release branches? [release/] 
Hotfix branches? [hotfix/] 
Support branches? [support/] 
Version tag prefix? [] 
subl . &
touch notes.md
git add $_
subl $_
git commit -m "=BG= add initial setup instructions"

### Init the django app

django-admin.py startproject linux_project
git add linux_project/
git commit -m "=BG= django admin start project"
git commit  notes.md -m "=BG= django start project commands"

### Configure django app

subl linux_project/linux_project/settings.py
git commit -am "=BG= configure database"
cd linux_project/
ll
chmod u+x manage.py #make this script executable by the current user

./manage.py syncdb
Creating tables ...
Creating table auth_permission
Creating table auth_group_permissions
Creating table auth_group
Creating table auth_user_groups
Creating table auth_user_user_permissions
Creating table auth_user
Creating table django_content_type
Creating table django_session
Creating table django_site
You just installed Django's auth system, which means you don't have any superusers defined.
Would you like to create one now? (yes/no): yes
Username (leave blank to use 'bguiz'): bguiz
Email address: cfe-basic@bguiz.com
Password: #bar
Password (again): #bar
Superuser created successfully.
Installing custom SQL ...
Installing indexes ...
Installed 0 object(s) from 0 fixture(s)

./manage.py runserver
Validating models...

0 errors found
November 01, 2013 - 19:10:47
Django version 1.5.5, using settings 'linux_project.settings'
Development server is running at http://127.0.0.1:8000/
Quit the server with CONTROL-C.

git commit -am "=BG= manage.py syncdb and runserver"

### In browser

Visit http://127.0.0.1:8000/

### Ensure we keep a clean git repo

touch .gitignore
git add $_
subl $_
git commit -am "=BG= git ignore"

## Set up a virtual environment

Useful to keep track of the proper environment, and control the version numbers of all the modules used

### Commands

pip freeze #global python packages
cd ~/Documents/
virtualenv ecommerce
cd $_
source bin/activate
#TODO how to deactivate?
#notice that now the command prompt is prefixed with (ecommerce)
pip freeze #python packages only within this virtual environment
argparse==1.2.1
wsgiref==0.1.2
pip install django==1.5.1 # install a specific version of django into this virtual env
pip freeze
Django==1.5.1
argparse==1.2.1
wsgiref==0.1.2

git commit notes.md -m "=BG= virtual env"

## Start the basic_code project

cd $PP
django-admin.py startproject  basic_code
cd basic_code/
ls -la
chmod u+x manage.py 
./manage.py runserver
cp ../linux_project/.gitignore .
git add .
git commit -am "=BG= start a new project called basic_code"

subl . &
subl ./basic_code/settings.py
touch basic_code.sqlite3
subl ./basic_code/urls.py
./manage.py syncdb
Would you like to create one now? (yes/no): yes
Username (leave blank to use 'bguiz'): bguiz
Email address: basic_code@bguiz.com
Password: #foo
Password (again): #foo
Superuser created successfully.
Installing custom SQL ...
Installing indexes ...
Installed 0 object(s) from 0 fixture(s)
#visit http://127.0.0.1/admin
#should be able to log in with bguiz/foo
#explore clicking around groups and users and sites
#note that you will get an error when visiting http://127.0.0.1/ as we have not defined a route to handle the root URL "/"
git commit -am "=BG= create sqlite db, configure access to admin panel"

### create an app

within the main project, we create apps
each app controls one action or function of the site (best practice)
e.g. contact us app, user profile app.
makes it easier to manage coidebase when complexity increases

./manage.py startapp contact
git add contact
git commit -am "=BG= start app contact"
