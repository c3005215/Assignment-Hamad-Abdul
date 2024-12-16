import Head from 'next/head'
import { fetchCourses } from "@/app/lib/db";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Courses Information",
  description: "List of available courses",
};

const Courses = async () => {
  const Courses = await fetchCourses();

  return (
    <div className="container">
      <Head>
        <title> Courses Details </title>
      </Head>
      <div className="courses">
        <Image 
          src="/images/courses.png" 
          alt="Courses Image"
          width={4032} 
          height={3024}
        />
      </div>

      <section>
        <h2>Computing Courses</h2>

        <div className="computing">
          <Image 
            src="/images/computing.jpg" 
            alt="Computing"
            width={4032} 
            height={3024}
          />
        </div>

        <p className="paragraph">
          The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering, and Cyber Security with Forensics, amongst others.
        </p>
        <p className="paragraph">
          The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking, and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics, and programming.
        </p>
        <p className="paragraph">
          The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
        </p>
      </section>

      <section>
        <h2>Design Courses</h2>

        <div className="design">
          <Image 
            src="/images/design.jpg" 
            alt="Design"
            width={4032} 
            height={3024}
          />
        </div>

        <p className="paragraph">
          The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
        </p>
        <p className="paragraph">
          The College's art and design courses don't just train you, they promote alternative ways of thinking, making, and communicating; they provide you with space, tools, and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
        </p>
        <p className="paragraph">
          You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses, and organisations.
        </p>
      </section>

      <p className="paragraph">
        Click on a course to view more information about it and explore the opportunities available.
      </p>

      <ul>
        {Courses.map((course, index) => (
          <li key={index}>
            <Link className = "paragraph" href={`./courses/${course.id}`}> {course.CourseTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;

