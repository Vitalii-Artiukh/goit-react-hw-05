// Ключ API: e739672946e16cd6e11df8e6c2050716

// Токен доступу для читання API:
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM5NjcyOTQ2ZTE2Y2Q2ZTExZGY4ZTZjMjA1MDcxNiIsIm5iZiI6MTcyOTE3MDI2NS4yMjI5NTIsInN1YiI6IjY3MTEwOTlkMWI5MTJhZGQyZWRiZjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BjH7BMxywfCkHUauJtddRffNEK7IqLe7pgGgBeYspcY

Here's an example API request:

https://api.themoviedb.org/3/movie/550?api_key=e739672946e16cd6e11df8e6c2050716

////////////////////////////////////////////////

'/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
'/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим
словом. '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною
інформацією про кінофільм. /movies/:movieId/cast – компонент MovieCast,
інформація про акторський склад. Рендериться в нижній частині на сторінці
MovieDetailsPage. /movies/:movieId/reviews – компонент MovieReviews, інформація
про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage. Якщо
користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент
NotFoundPage, в якому є посилання Link на домашню сторінку.

/////////////////////////////////////////////////////////////////

Файли компонентів сторінок, таких як HomePage, MoviesPage, MovieDetailsPage,
NotFoundPage, повинні бути в папці src/pages. Компоненти MovieCast і
MovieReviews не є окремими сторінками, вони є лише частинами сторінки
MovieDetailsPage, тому файли цих компонентів зберігаємо в src/components. Меню з
навігаційними посиланнями перенесіть в компонент Navigation. Він складається з
двох компонентів NavLink, які вказують на маршрути / і /movies. Для відображення
списку фільмів створіть компонент MovieList. Використовуйте його на сторінках
HomePage і MoviesPage.

/////////////

poster_path

title // production_countries.name

popularity

overview

genres.name

release_date ???
