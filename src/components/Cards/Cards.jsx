import Fureverhomed from '../../assets/Fureverhomed.png'
import JateShot from '../../assets/JateShot.png'
import RainOnParade from '../../assets/Rainonparade.png'
import Weather from '../../assets/Weather.png'

const showings =[{
    name: "Project 1",
    image: Fureverhomed,
    Description:" Description"
    },
    {
        name: "Project 1",
        image: JateShot,
        Description:" Description"
    },
    {
        name: "Project 1",
        image: RainOnParade,
        Description:" Description"
    },
    {
        name: "Project 1",
        image: Weather,
        Description:" Description"
    },
    {
        name: "Project 1",
        image: "working",
        Description:" Description"
    }


]


export default function CardList() {
    return (
        <ul className="list-group">
        {showings.map((object) => (
          <li className="list-group-item" key={object.name}>
            <img
            
            class="rounded mx-auto d-block"
              alt={object.name}
              className="img-fluid"
              src={object.image}
              
            />
          </li>
        ))}
      </ul>
    );
  }


  