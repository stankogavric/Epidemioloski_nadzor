# Epidemioloski_nadzor

## Deployment
### Backend  
```
cd backend/app/ 
nohup java -jar target/app-0.0.1-SNAPSHOT.jar &
```

### Nginx
Created link of directory of project in `/var/www/` with `sudo ln -s /home/otto/data/git/Epidemioloski_nadzor/`
Then create **Nginx cofiguration file** to separate static files for frontend and requests for backend
Create links to Nginx configuration filde into direcories `/etc/nginx/sites-available` and `/etc/nginx/sites-enabled` with `sudo ln -s /home/otto/data/git/Epidemioloski_nadzor/frontend/epidemioloski-nadzor/epidemija_nginx.conf .`

**Rewriting Requests:**
```
server {
  listen 80;
  ...
  root /var/www/epidemija/frontend/epidemioloski-nadzor/dist/epidemioloski-nadzor/;
  
  location / {
    rewrite /api/* /$1 break;
    try_files $uri $uri/ /index.html;
  }

  location ~ \.(html|js|map|ico) {
    try_files $uri $uri/ /index.html;
  }

  location /api/ {
    proxy_pass http://localhost:8080;
  }
}
```

Last step is to start **nginx service** 
`
sudo service nginx restart
`
