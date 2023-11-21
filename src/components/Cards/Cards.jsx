import Fureverhomed from '../../assets/Fureverhomed.png'
import JateShot from '../../assets/JateShot.png'
import RainOnParade from '../../assets/Rainonparade.png'
import Weather from '../../assets/Weather.png'

const showings =[{
    name: "Project 1",
    image: Fureverhomed,
    description: "Description",
    github: "https://github.com/ccoff1798/FureverHomed"
    },
    {
        name: "Project 1",
        image: JateShot,
        description: "Description",
        github: "https://github.com/ccoff1798/JateEditor"
    },
    {
        name: "Project 1",
        image: RainOnParade,
        description: "Description",
        github: "https://github.com/RedactdName/RainOnYourParade"
    },
    {
        name: "Project 1",
        image: Weather,
        description: "Description",
        github: "https://github.com/ccoff1798/weatherforecast"
    },
  


]


export default function CardList() {
    return (
        <ul className="list-group">
        {showings.map((object) => (
          <li className="list-group-item" key={object.name}>
            <h5 className = "card-title">{object.name} </h5>
             <a target="_blank" href={object.github}>
            <img
            
            class="rounded mx-auto d-block img-fluid text-center"
              alt={object.name}
              className="img-fluid"
              src={object.image}
              
            />
            </a>
            <h6 className = "card-text mb-2 text-body-secondary">{object.description}</h6>
          </li>
        ))}
      </ul>
    );
  }


  