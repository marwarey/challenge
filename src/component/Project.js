import Image1 from "../Image/proj1.jpg"
import Image2 from "../Image/proj2.jpg"
import Image3 from "../Image/proj3.jpg"
import Image4 from "../Image/proj4.jpg"

function Project (){
    const array=[{title:'Project1',imgsrc:Image1},{title:'Project2',imgsrc:Image2},{title:'Project3',imgsrc:Image3},{title:'Project4',imgsrc:Image4}]

    return (
       
       
        <section id="projects">
          <h2 className="text-important">Projects</h2>
          <div className="projects-container">

{array.map(el=> <div className="project-card">
              <img src={el.imgsrc} alt="project" />
              <h3>{el.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                aliquam.
              </p>
              <p><a href="#">Github Link</a></p>
            </div>)}          

         
           
            </div>
        </section>


    )
    }

export default Project