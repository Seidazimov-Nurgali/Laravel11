FROM php:8.2-fpm

WORKDIR "/var/www"

ENV DEBIAN_FRONTEND noninteractive

# Install selected extensions and other stuff
# && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \ nodejs \
RUN set -eux; \
    apt-get update && \
    apt-get upgrade -y; \
    apt-get install -y --no-install-recommends \
            zip \
            supervisor \
            unzip \
            git \
            curl \
            libzip-dev \
            libmemcached-dev \
            libz-dev \
            libpq-dev \
            libjpeg-dev \
            libpng-dev \
            libfreetype6-dev \
            libssl-dev \
            libwebp-dev \
            libxpm-dev \
            libmcrypt-dev \
            libonig-dev; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN set -eux; \
    # Install the PHP pdo_pgsql extention
    docker-php-ext-install pdo_pgsql; \
    # Install the PHP gd library
    docker-php-ext-configure gd \
            --prefix=/usr \
            --with-jpeg \
            --with-webp \
            --with-xpm \
            --with-freetype; \
    docker-php-ext-install gd; \
    docker-php-ext-configure zip; \
    docker-php-ext-install zip; \
    docker-php-ext-install pcntl; \
    php -r 'var_dump(gd_info());'

RUN pecl install redis \
    && rm -rf /tmp/pear \
    && docker-php-ext-enable redis

# Install supervisor
#RUN apt-get install -y supervisor
RUN /etc/init.d/supervisor start
#COPY ./_docker/supervisor/laravel11-notifications.conf /etc/supervisor/conf.d

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN mkdir -p /home/root/.composer && chown -R root:root /home/root

#COPY ./_docker/php-fpm/php.ini /usr/local/etc/php/conf.d/php.ini

# Set permissions for storage and bootstrap/cache directories
#RUN chmod -R u+rwX,g+rwX,o+rwX /var/www/storage && \
#    chmod -R u+rwX,g+rwX,o+rwX /var/www/bootstrap/cache && \
#    chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
