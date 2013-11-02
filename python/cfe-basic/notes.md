### Tools

sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install git git-flow sublime-text-installer
#without using PPA: download from http://www.sublimetext.com/3

### In she1l 1

sudo apt-get install python-pip 
pip install django
which django-admin.py 
#expected output (not blank): /usr/local/bin/django-admin.py

### In browser

Make a new git repo called cfe-basic

### In shell 2

cd /usr/local/code # or wherever
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

