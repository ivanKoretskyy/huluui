type Actor = {
    id: string;
    firstName: string;
    lastName: string;
 }
 export default async function Page() {
  const rawActors  = await fetch('https://zesty-hallie-ivankoretskyy-418f40b9.koyeb.app/actors');
  const actors = await rawActors.json() || []
 console.info('actors', actors)
  return (
    <div>
            <p>Actors</p>
    <ul>
      {actors.map((movie :Actor) => (
        <p key={movie.id}>{movie.firstName} {movie.firstName}</p>
      ))}
    </ul>
    </div>

  )
}