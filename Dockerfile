FROM nginx:alpine

COPY . /usr/share/nginx/html

# Render يستخدم متغير PORT
CMD sh -c "sed -i 's/listen       80;/listen       '${PORT}';/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
