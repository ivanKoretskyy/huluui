 type Movie = {
    id: string;
    title: string
 }
 export default async function Page() {
  const rawMovies  = await fetch('https://zesty-hallie-ivankoretskyy-418f40b9.koyeb.app/movies');
  const movies = await rawMovies.json() || []
 console.info('movies', movies)
  return (
    <div>
            <p>movies</p>
    <ul>
      {movies.map((movie :Movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </ul>
    </div>

  )
}