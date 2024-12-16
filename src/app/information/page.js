import React from 'react';
import Image from 'next/image';

const Information = () => {
  return (
    <div>

        <div className="info-banner">
          <Image
            src="/images/information.png" 
            alt="Information Banner" 
            width={4616} 
            height={3324}
          />
        </div>

      <main>

        <h1>Information for Staff</h1>

        <h2>News</h2>

        <div className="building2">
          <Image 
            src="/images/building2.jpg" 
            alt="Building 2"
            width={4616} 
            height={3324}
          />
        </div>

        <p className="paragraph">
          Cantor College recently hosted the Software Engineering Student of the Year awards. Shortlisted candidates from around the country attended the one-day event.
        </p>

        <h2>Academic Registry</h2>
        <p className="paragraph">
          For academic regulations, assessment, awards, student records, and course validation.
        </p>

        <h2>Catering Services</h2>

        <div className="rules">
          <Image 
            src="/images/rules.png" 
            alt="Rules"
            width={4616} 
            height={3324}
          />
        </div>

        <p className="paragraph">
          Contact the Catering Services regarding on and off-site catering.
        </p>

        <h2>Financial Services</h2>
        <p className="paragraph">
          The financial team, based on the 2nd Floor, is responsible for all areas of student finance as well as College budgeting.
        </p>

        <h2>Information Systems Services</h2>

        <div className="computing">
          <Image 
            src="/images/computing.jpg" 
            alt="Computing"
            width={4616} 
            height={3324}
          />
        </div>

        <p className="paragraph">
          The ISS team delivers the College's computing facilities, including all hardware and software. They also run the staff helpdesk.
        </p>

        <h2>Marketing Services</h2>
        <p className="paragraph">
          The Marketing Team will help promote events and new courses. They will assist with press release preparation.
        </p>

        <h2>Personnel Services</h2>
        <p className="paragraph">
          All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.
        </p>

        <h2>Facilities</h2>
        <p className="paragraph">
          The facilities team is responsible for the general care and maintenance of the College. All enquiries can be made via the main helpdesk.
        </p>
      </main>
    </div>
  );
}

export default Information;
