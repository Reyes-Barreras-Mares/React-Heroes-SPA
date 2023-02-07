import { Link } from "react-router-dom";

const CharactersByHero = (alter_ego, characters ) =>{

    if (characters == alter_ego) return <p>{characters}</p>;

}

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const HeroUrlImage = `/assets/heroes/${id}.jpg`;




    return (
        <div className="col animate__animated animate__fadeIn animate__faster">
            <div className="card">
            <div className="row no-gutters ">
                    <div className="col-4">
                        <img src={HeroUrlImage} className="card-img" alt={alter_ego} />
                    </div>

                  <div className="col-8">
                    <div className="card-body">
                     <h5 className="card-title">{superhero}</h5>
                    </div>
                     <p>{characters}</p>

                     {
                        (alter_ego !==  characters)  && <CharactersByHero/>
                     }

                     <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                     </p>

                     <Link to={`/hero/${id}`}>
                      Ver mas...
                     </Link>

                  </div>
                </div>
            </div>
        </div>

    )
}
