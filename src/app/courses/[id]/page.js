import Head from 'next/head'
import { fetchCoursesDetails } from "@/app/lib/db";
import Image from 'next/image';
const CoursesDetails = async ({params}) => {
    const {id} = await params;
    console.log(id);
    const CoursesDetails = await fetchCoursesDetails(id);
    console.dir(CoursesDetails)
      return (
      <div className='container'>
        <Head>
          <title> Courses </title>
        </Head>
        <h2>Courses Details </h2>

        <p className = "paragraph" >
         Course Title: {CoursesDetails.CourseTitle}</p>

         <div className="building1">
          <Image
            src="/images/controller.jpg" 
            alt="controller"
            width={3000}
            height={4000} 
          />
        </div>

         <p className = "paragraph" >
         Course Type: {CoursesDetails.CourseType}</p>

        <p className= "paragraph"   >
         Course Summary: {CoursesDetails.CourseSummary} 
         </p>

         <div className="classroom">
          <Image
            src="/images/classroom.jpeg"
            alt="classroom"
            width={800}  
            height={1200} 
          />
        </div>


        <p className = "paragraph" >
         Course Award Name: {CoursesDetails.CourseAwardName}</p>


         <p className = "paragraph" >
         UCAS CODE: {CoursesDetails.UcasCode} This code is crucial for your application submission."     </p>


         <p className = "paragraph" >
         UCAS Points Needed: {CoursesDetails.UcasPoints}</p>

         <div className="graffiti">
          <Image
            src="/images/graffiti.jpeg" 
            alt="graffiti"
            width={800}  
            height={1200} 
          />
        </div>

         <p className = "paragraph" >
         Course Year Of Entry: {CoursesDetails.YearOfEntry}</p>


         <p className = "paragraph" >
         Course Mode Of Attendance: {CoursesDetails.ModeOfAttendance}</p>


         <p className = "paragraph" >
         Course Study Length: {CoursesDetails.StudyLength}</p>
        

         <div className="building2">
          <Image
            src="/images/building2.jpg" 
            alt="building2"
            width={800}  
            height={1200} 
          />
        </div>

         <p className = "paragraph" >
         Course Has Foundation Year: {CoursesDetails.HasFoundationYear}</p>


         <p className = "paragraph" >
         Course Subject: {CoursesDetails.CourseSubject}</p>


         <p className = "paragraph" >
         Course No Longer Recruiting: {CoursesDetails.NoLongerRecruiting}</p>


      </div>
    );
  }
  export default CoursesDetails