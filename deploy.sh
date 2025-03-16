#!/bin/bash

set -e

echo "Deploying..."
chmod -R u+rwX,g+rwX,o+rwX /var/www/storage
chmod -R u+rwX,g+rwX,o+rwX /var/www/bootstrap/cache
chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
cp .env.example .env
docker-compose up -d
docker exec Laravel11-php-fpm composer install --no-dev --optimize-autoloader
docker exec Laravel11-php-fpm php artisan key:generate
docker exec Laravel11-php-fpm php artisan migrate --seed
docker exec Laravel11-php-fpm php artisan optimize
docker exec Laravel11-php-fpm /etc/init.d/supervisor start
docker exec Laravel11-node npm run install
docker exec Laravel11-node npm run build
echo "Done!"
