import React ,{useEffect ,useState } from 'react'
import './MyProjects.css'
import ScrollingLine from '../../components/scrollingLine/ScrollingLine ';
import image1 from '../../images/image2.png';
import image2 from '../../images/netflix.png';
import image3 from '../../images/image3.png';
import expense from '../../images/expense.png';
import blog from '../../images/blog.png';
import raycasting from '../../images/raycasting.png';

const data = [
  {
    image: raycasting,
    title: 'Raycasting Game',
    description: "A raycasting game built with TypeScript, featuring a 3D-like environment rendered from a 2D map. Players navigate through mazes with real-time lighting and wall textures. The game demonstrates efficient use of vector math and rendering algorithms for smooth gameplay.",
    url: 'https://raycasting-game.vercel.app/',
    gitUrl: "https://github.com/Anish312/raycasting-game.git",
    tech: ['JavaScript', 'TypeScript',"HTML","CSS"]
  },
  {
    image: image1,
    title: 'SkiLine Logistix LLC',
    description: "SkiLine Logistix LLC is a logistic business serving clients in the heart of Texas. The company required a modern and efficient online platform to streamline their operations and connect with their customers seamlessly. Leveraging the power of React.js and Firebase, I crafted a dynamic and user-friendly website that caters to SkiLine Logistic's specific needs.",
    url: 'https://skilinelogistix-3d3e7.web.app/',
    gitUrl: "https://github.com/Anish312/raycasting-game.git",
    tech: ['React.js', 'Firebase',"HTML","CSS"]
  },
  {
    image: expense,
    title: 'Expense Manager',
    description: 'An expense manager website is a powerful financial tool designed to help individuals and businesses track their spending and manage their budgets effectively.  ',
    url: 'https://expense-manager-delta.vercel.app',
    gitUrl: "https://github.com/Anish312/expense-manager.git",
    tech: ['React.js', 'Firebase', 'Node' , "Redux" , "Saga"]
  },
  {
    image: blog,
    title: 'Blog Website',
    description :"blog website serves as a dynamic platform for individuals and organizations to share information, ideas, and opinions with a global audience.",
    url: 'https://blogproject-a042e.web.app/',
    gitUrl: "https://github.com/Anish312/blog-website",
    tech: ['React.js', 'Firebase', 'Node' ]
  },
  {
    image: image3,
    title: 'DRockys tiles!',
    description:
      'The DRockys Tiles project exemplifies my expertise in creating impactful digital solutions tailored to specific industries. As a website developed for a tiles installation business, this project combines the power of React.js and Firebase.',
    url: 'https://house-a7add.web.app/',
    gitUrl: "",
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
     <h1>My Projects </h1>
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
            <div className="myProjects-imagesContainers-product-head">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="myProjects-imagesContainers-product-title">
                     {item.title} 
                 </a>
                <a href={`${item.gitUrl}`}> <i  class="fa fa-github " style={{marginBottom:"10px",fontSize:"22px" ,color:"white"}}></i> </a>
            </div>
        
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