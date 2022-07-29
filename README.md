Design inspiration taken from:  
- https://tailwind-elements.com
- https://tailwindcomponents.com/component/button-6
- https://dev.to/codeply/helpful-page-layouts-using-tailwind-css-1a3k

Issues:
- Migrations: from terminal - use 0.0.0.0
- API route - use: host.docker.internal

Devops:
- Serve backend: `docker-compose --env-file ./laravel/.env up -d`
- Serve frontend: `yarn serve`
- Run migrations: `docker compose exec laravel sh && php artisan migrate fresh`
- Run seeders: `docker compose exec laravel sh && php artisan db:seed`