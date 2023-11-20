import Fureverhomed from '../../assets/Fureverhomed.png'
import JateShot from '../../assets/JateShot.png'
import RainOnParade from '../../assets/Rainonparade.png'
import Weather from '../../assets/Weather.png'

const showings =[{
    name: "Project 1",
    image: Fureverhomed,
    Description:" Description",
    github: "https://github.com/ccoff1798/FureverHomed"
    },
    {
        name: "Project 1",
        image: JateShot,
        Description:" Description",
        github: "https://github.com/ccoff1798/JateEditor"
    },
    {
        name: "Project 1",
        image: RainOnParade,
        Description:" Description",
        github: "https://github.com/RedactdName/RainOnYourParade"
    },
    {
        name: "Project 1",
        image: Weather,
        Description:" Description",
        github: "https://github.com/ccoff1798/weatherforecast"
    },
  


]


export default function CardList() {
    return (
        <ul className="list-group">
        {showings.map((object) => (
          <li className="list-group-item" key={object.name}>
             <a target="_blank" href={object.github}>
            <img
            
            class="rounded mx-auto d-block"
              alt={object.name}
              className="img-fluid"
              src={object.image}
              
            />
            </a>
          </li>
        ))}
      </ul>
    );
  }


  