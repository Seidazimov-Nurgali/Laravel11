#!/bin/bash

set -e

echo "Deploying..."
git pull origin main
php artisan down
php composer install --no-dev --optimize-autoloader
php artisan migrate --force
/etc/init.d/supervisor start
npm run build
php artisan config:cache
php artisan event:cache
php artisan route:cache
php artisan view:cache
php artisan up
echo "Done!"
