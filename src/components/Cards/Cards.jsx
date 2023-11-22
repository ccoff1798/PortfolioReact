import Fureverhomed from '../../assets/Fureverhomed.png'
import JateShot from '../../assets/JateShot.png'
import RainOnParade from '../../assets/Rainonparade.png'
import Weather from '../../assets/Weather.png'

const showings =[{
    name: "Furever Homed",
    image: Fureverhomed,
    description: "This is my first project using MySQL and NodeJs, however I have had experience with API's before this in another item. This project used Petfinder API to locate animals based on species, breed, location, or other search criteria to help them become Furever Homed",
    github: "https://github.com/ccoff1798/FureverHomed"
    },
    {
        name: "JATE Text Editor",
        image: JateShot,
        description: "This one is a less intensive portfolio piece, it is a simple text editor, the main purpose of which was to practice installing software using webpack.",
        github: "https://github.com/ccoff1798/JateEditor"
    },
    {
        name: "Rain On Your Parade",
        image: RainOnParade,
        description: "This is my first sizable project we did during out bootcamp, it was used to locate events such as concerts, parades, sporting events, or a variaty of other categories in a searched location, and to populate the expected weather for that event at that time to make sure it doesn't Rain on Your Parade",
        github: "https://github.com/RedactdName/RainOnYourParade"
    },
    {
        name: "Weather Forecast",
        image: Weather,
        description: "This was a prototype of the Rain on Your Parade Project to get familar with using public API's.",
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
            
            className="rounded mx-auto d-block img-fluid text-center img-fluid card-image"
              alt={object.name}
              src={object.image}
              
            />
            </a>
            <h6 className = "card-text mb-2 text-body-secondary">{object.description}</h6>
          </li>
        ))}
      </ul>
    );
  }


  