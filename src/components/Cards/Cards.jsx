import Fureverhomed from '../../assets/Fureverhomed.png'
import JateShot from '../../assets/JateShot.png'
import RainOnParade from '../../assets/Rainonparade.png'
import Weather from '../../assets/Weather.png'
import Breadcrumbs from '../../assets/breadcrumbs.png'
import Ghostly from '../../assets/GhostGameScreenshot.png'
import BlueMesaPhoto from '../../assets/BlueMesaPhoto.png'

const showings =[
    {
        name: "Blue Mesa Photo",
        image: BlueMesaPhoto,
        description: "This is a project I did for a client to showcase their Campground. It uses React, Express, and NodeJs to display the photos in a gallery, and to allow the user to contact the client for more information, along with photos of the RV and Space available for rent. The Logo was created by me directly, however the photos were supplied by the client. The live site is still up and running, and can be found in the github",
        github: "https://github.com/ccoff1798/firstgig"
    },
  {
    name: "Ghostly (Title WIP) 'Unity Game'",
    image: Ghostly,
    description: "This is my first game I have made using C#, I used this as a playground to learn the basics of how C# works, and how to use the Unity Editor. The game is a simple 3D where you play as a ghost trying to fight off Skeletons with 3 main abilities, Ghostly projectile, a shield that reflects enemy attacks, and a phase ability to allow phasing through certain objects. Along with this, the enemies AI uses Navmeshing to navigate, along the ability to get knocked down by the shield. The game is still in development, but I am excited to see where it goes. The github attached is not actually the files for the game, but a set of scripts I used in the creation, as I had difficulties uploading the full project to github.",
    github: "https://github.com/ccoff1798/Ghostly"
},{
  
  name: "BreadCrumbs",
    image: Breadcrumbs,
    description: "This project uses MongoDb, Express, React and NodeJs to keep track of friends when going out. It uses the Google Maps Api to locate the user and their friends, and allows them to add friends to their group, and to see where they are in relation to the user.",
    github: "https://github.com/RedactdName/friendTracker"
    },{
    name: "Furever Homed",
    image: Fureverhomed,
    description: "This is my first project using MySQL and NodeJs, however I have had experience with API's before this in another item. This project used Petfinder API to locate animals based on species, breed, location, or other search criteria to help them become Furever Homed",
    github: "https://github.com/ccoff1798/FureverHomed"
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


  