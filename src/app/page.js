import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <h2>Welcome to The Cantor College Website</h2>

      <div className="building4">
        <Image
          src="/images/building4.jpg" 
          alt="Building 4"
          width={4624} 
          height={3468} 
          layout="intrinsic"
        />
      </div>

      <p className="paragraph">Cantor College is dedicated to offering a high-quality education in an encouraging and vibrant atmosphere. Our website is your starting point for discovering everything we have to offer, from our varied variety of computing and design courses to the many learning tools available to pupils as well as teachers. Whether you want to learn more about our campus, discover various programs, or access useful student services, our website is designed to provide you with all of the information you need right now. Explore our resources, interact with us, and discover the wonderful opportunities that await you at Cantor College.

</p>
      
      <main >
        <h3>Top 10 Great Things About Cantor College</h3>
        <ul>
          <li className="paragraph">Our experiences and dedicated Learning Support team.</li>
          <li className="paragraph">Access to library and study tools</li>
          <li className="paragraph">Our Facilities</li>
          <li className="paragraph">dynamic and innovative courses in Design and Computing</li>
          <li className="paragraph">Partnerships with Cantor College</li>
          <li className="paragraph">Internship and Work Placement Opportunities</li>
          <li className="paragraph">Vibrant Student Life</li>
          <li className="paragraph">Latest Technology and Resources</li>
          <li className="paragraph">Reception desk area</li>
          <li className="paragraph">Catering outlet</li>
        </ul>

        <h3> Work At Cantor College</h3>

        <p className= "paragraph">     Cantor College offers students a wide range of work opportunities both on-campus and through external partnerships to ensure they gain the professional experience necessary for a successful career.

        </p>

        <div className="building2">
        <Image
          src="/images/building2.jpg" 
          alt="Building 2"
          width={4199} 
          height={3768} 
        />
      </div>

        <p className="paragraph"> For Work Opportunities Visit The Contact Us Page and send us a message</p>

        <h3> About Us </h3>

        <div className="students2">
        <Image
          src="/images/students2.jpeg" 
          alt="Students2"
          width={4112} 
          height={3789} 
        />
      </div>

        <p className="paragraph"> Visit the About Us page to learn more about Cantor College and its rich history, mission, and values.</p>

        <p className="paragraph"> On this page, you'll also find essential information on How to Find Us, including our campus location, nearby landmarks, and directions to help you plan your visit easily.</p>


        <h3> Courses </h3>

        <div className="students">
        <Image
          src="/images/students.jpeg" 
          alt="Students"
          width={4675} 
          height={3879} 
        />
      </div>

        <p className = "paragraph"> Cantor College offers a wide range of design and computing courses, catering to diverse interests and career paths. Visit the courses section on our website for detailed information and to explore all available options.</p>


      <h3> For Students </h3>

      <div className="rules">
        <Image
          src="/images/rules.png" 
          alt="Rules"
          width={4112} 
          height={3452} 
        />
      </div>

      <p className = "paragraph"> Explore the resources and facilities available to help you succeed at Cantor College. From state-of-the-art labs and design studios to collaborative learning spaces and wellness centers, our campus is designed to support your academic and personal growth. Whether you're looking for study areas, career development resources, or recreational spaces, we provide everything you need to thrive during your time here.</p>



      </main>
    </div>
  );
};
export default Home;
