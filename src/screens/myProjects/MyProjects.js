import React ,{useEffect ,useState } from 'react'
import './MyProjects.css'
import ScrollingLine from '../../components/scrollingLine/ScrollingLine ';
import image1 from '../../images/image2.png';
import image2 from '../../images/netflix.png';
import image3 from '../../images/image3.png';

const data = [
  {
    image: image1,
    title: 'SkiLine Logistix LLC',
    description: "SkiLine Logistix LLC is a logistic business serving clients in the heart of Texas. The company required a modern and efficient online platform to streamline their operations and connect with their customers seamlessly. Leveraging the power of React.js and Firebase, I crafted a dynamic and user-friendly website that caters to SkiLine Logistic's specific needs.",
    url: 'https://skilinelogistix-3d3e7.web.app/',
    tech: ['React.js', 'Firebase',"HTML","CSS"]
  },
  {
    image: image2,
    title: 'Netflix Clone',
    description: 'The Netflix Clone project is a testament to my passion for web development and my ability to replicate complex platforms using modern technologies. I embarked on this project to not only hone my skills but also to showcase my proficiency in building dynamic, feature-rich web applications.',
    url: 'https://netflix22-46732.web.app/',
    tech: ['React.js', 'Firebase', 'Node' , "API's"]
  },
  {
    image: image3,
    title: 'DRockys tiles!',
    description:
      'The DRockys Tiles project exemplifies my expertise in creating impactful digital solutions tailored to specific industries. As a website developed for a tiles installation business, this project combines the power of React.js and Firebase.',
    url: 'https://house-a7add.web.app/',
    tech: ['React.js', 'Firebase',"HTML","CSS"]
  }
];

function MyProjects() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);
  
      return () => clearInterval(timer); // Cleanup the timer on component unmount
  
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', () => {
          document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
        }, false);
      }, []);
    
    

  return (
    <div className='myProjects'>
   <div className='myProjects-head'>
     <h1>My Projects</h1>
   </div>
    <div className='myProjects-container'>
 
     
      <div className="myProjects-imagesContainers">
      {data.map((item, index) => (
        <div
          key={index}
          className={`image-text-container ${
            index % 2 === 0 ? 'even' : 'odd'
          }`}
        >
          <div className="myProjects-imagesContainers-image"> 
          {index === currentImageIndex && (
                <div className="bouncing-ball"></div>
              )}      <a href={item.url} target="_blank" rel="noopener noreferrer">

            <img width={100} src={item.image} alt={`Product ${index + 1}`} />

            </a>

          </div>
          <div className="myProjects-imagesContainers-product-info">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="myProjects-imagesContainers-product-title">
        {item.title}
      </a>
            <div className="myProjects-description">{item.description}</div>
            <div className="tech-list">
        {item.tech.map((tech, techIndex) => (
          <div key={techIndex} className="tech-item">
            {tech}
          </div>
        ))}
      </div>
          </div>
        </div>
      ))}
    </div>
    </div>     
  </div>
  )
}

export default MyProjects