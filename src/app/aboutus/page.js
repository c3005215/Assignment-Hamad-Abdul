import Image from 'next/image';

const Aboutus = () => {
  return (
    <div>
      <div className="about-us-banner">
        <Image
          src="/images/aboutus.jpeg" 
          alt="About Cantor College"
          width={4624}  
          height={3468}  
          objectFit="cover"          
        />
      </div>


      <main>
        <h1>Find Out More About Cantor College</h1>
        <p className="paragraph">
          Cantor College was established in 1989 to specialize in Computing and Design.
          At Cantor College, we want to give students the education they need to achieve their career aims, 
          leaving them equipped with the knowledge, skills, and experience to succeed.
        </p>

        <div className="building1">
          <Image
            src="/images/building.jpeg"
            alt="building"
            width={800} 
            height={1200} 
          />
        </div>

        <h2>Opportunities That Set You Apart</h2>
        <p className="paragraph">
          Cantor College gives you the opportunities that can give you the edge when you enter the world of work, 
          through our teaching and our links to some of the world's leading researchers and employers. 
          Our students have gone on to successful careers in a wide range of industries across the globe.
        </p>

        <h3>Supporting Your Journey to Success</h3>
        <p className="paragraph">
          Whatever your ambitions, our learning and support can help you get the most out of your time with Cantor College, 
          both as a student and in your future career.
        </p>

        <div className="students">
          <Image
            src="/images/students.jpeg"  
            alt="Students"
            width={800}  
            height={1200} 
          />
        </div>

        <h1>How To Find Us</h1>
        <p className="paragraph">
          <address>
            <a href="https://www.google.com/">Cantor College</a><br />
            Main Street<br />
            Sheffield<br />
            SC4 2BB<br />
            Tel: (01321) 2340 235<br />
            Fax: (01321) 2340 236<br />
            Email: <a href="mailto:info@cantorcollege.ac.uk">info@cantorcollege.ac.uk</a><br />
          </address>
        </p>

        <h2>Finding Cantor College</h2>
        <p className="paragraph">
          Cantor College is located on Main Street, with excellent bus links to Sheffield city centre, Meadowhall, and other parts of the city. For more information and to plan your journey, please visit the Travel South Yorkshire website.
        </p>
        <p className="paragraph">
          <a href="https://journeyplanner.travelsouthyorkshire.com/">Travel South Yorkshire Journey Planner</a>
        </p>

        <h3>Student Benefits and Parking Guidelines</h3>
        <p className="paragraph">
          Details about services, discounts, and concessions for Cantor College students can be obtained from Student Services.
        </p>

        <p className="paragraph">
          The car park at Cantor College is reserved for visitors and staff. There are designated areas for bicycles, mopeds, and motorcycles. Students who drive and park in the surrounding streets are kindly asked to park responsibly and be mindful of local residents.
        </p>


        <div className="classroom">
          <Image
            src="/images/classroom.jpeg" 
            alt="Classroom"
            width={1200}
            height={800}
          />
        </div>
      </main>
    </div>
  );
};

export default Aboutus;
