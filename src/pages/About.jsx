import CodyProfile from '../assets/CodyProfile.png'
import lacy from '../assets/lacy.png'
import Mountain from '../assets/Mountain.png'
import MeAndAdriana from '../assets/MeAndAdriana.png'
export default function About() {
  return (
    <div>
      <h1 className='center'>About Cody Coffey</h1>
      <h3>

Hello! I'm Cody, a passionate and enthusiastic coder based in Lakewood, Colorado. My journey in the tech world began at the University of Denver's coding bootcamp, where I honed my skills in a variety of languages and tools including JavaScript, React, HTML, CSS, MongoDB, MySQL, and Node.js.

Before diving into the coding universe, I had a successful career in sales. However, my true calling was always in the realm of technology. Ever since I was a child, I've been fascinated by computers. I loved disassembling gadgets just to see if I could put them back together and have been assembling computers from a young age. This childhood curiosity seamlessly transitioned into a passion for coding, which has become an exhilarating new chapter in my lifelong quest for knowledge.

When I'm not coding, I'm an avid explorer of the outdoors and urban landscapes. I relish taking my dogs to parks, hiking through nature's trails, and discovering new restaurants in local cities. I'm also a gaming enthusiast and a frequent visitor to the library, where I immerse myself in the world of books.

My goal is to continuously expand my technical expertise and create applications that make a positive impact on people's lives. I'm eager to blend my background in sales with my technical skills to develop solutions that are not only innovative but also user-friendly and impactful.

Let's connect and create something amazing together!
      </h3>
      <img className = "img-thumbnail my-photo center"src={CodyProfile} alt="Photo of me" width="50rem" height="auto" />
      <img className = "img-thumbnail my-photo center"src={MeAndAdriana} alt="Photo of me" width="50rem" height="auto" />
      <img className = "img-thumbnail my-photo center"src={Mountain} alt="Photo of me" width="50rem" height="auto" />
      <img className = "img-thumbnail my-photo center"src={lacy} alt="Photo of me" width="50rem" height="auto" />
    </div>
  );
}
