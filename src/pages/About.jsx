import CodyProfile from '../assets/CodyProfile.png'
import lacy from '../assets/lacy.png'
import Mountain from '../assets/Mountain.png'
import MeAndAdriana from '../assets/MeAndAdriana.png'
export default function About() {
  return (
    <div>
      <h1 className='center'>About Cody Coffey</h1>
      <h3>
Hello, My Name is Cody Coffey and I am a Junior Developer. While most of my career I spent in Automotive sales, I found my real passion in coding. I have a junior level understanding in HTML, CSS, JavaScript, NodeJs, Express, MySQL, and React, along with starting my first steps into learning C# through playing around in the Unity Editor. I am always looking to learn more, and to expand my knowledge in the field. 

 

      </h3>
      <h3> When I am away from the computer, my interests include Classic cars, nature, animals, and spending time with my girlfriend and family. I grew up outside of Austin, Texas, however have spent since 2019 in Colorado to be closer with family. I was in Durango for the majority of my time in Colorado, where I got to enjoy all the color and nature Colorado has to provide, however I am currently relocated to the greater Denver area for work.  I am currently looking for position in the field, and am excited to see where my career will take me. </h3>
      <img className = "img-thumbnail my-photo center"src={CodyProfile} alt="Photo of me" width="50rem" height="auto" />
      <img className = "img-thumbnail my-photo center"src={MeAndAdriana} alt="Photo of me" width="50rem" height="auto" />
      <img className = "img-thumbnail my-photo center"src={Mountain} alt="Photo of me" width="50rem" height="auto" />
      <img className = "img-thumbnail my-photo center"src={lacy} alt="Photo of me" width="50rem" height="auto" />
    </div>
  );
}
