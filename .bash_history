sudo apt update
sudo apt install docker.io docker-compose -y
git clone https://github.com/gymie/docker-compose-laravel.git laravel
cd laravel
mkdir src
sudo docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
docker-compose up -d site
sudo docker-compose up -d site
clear
sudo su
sudo docker-compose down
sudo docker volume rm laravel_mysql_data
sudo docker-compose up -d site
clear
sudo su
git init
cd laravel
git init
git add .
git status
git commit -m "tugas view"
git branch -M main
git status
git remote add origin https://github.com/markusmarbun/tugas-view.git
git -v
git remote add origin https://github.com/markusmarbun/tugas-view.git
git log
cd laravel
git init
git add .
git status
git remote remove -v origin
git remote remove
git remote add origin https://github.com/markusmarbun/tugas-view.git
git remote -v origin 
git -v origin
git init
git status
git add.
git add .
status
cls
clear
git init
yes
clear
git init
git commit -m "first commit"
git add .
git commit -m "first commit"
git remote add origin https://github.com/markusmarbun/view_sawit.git
git push -u origin main
clear
git init
git add .
git commit -m "buat-file"
git remote add origin https://github.com/markusmarbun/view_sawit.git
git push -u origin main
clear
