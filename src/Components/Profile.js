import React from 'react'
import '../styles/Profile.css'
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Results = ({profiles, loading}) => {
   if (loading) {
     return (
       <div>
        {/*added spinner effect to the loading state*/}
         <Backdrop
           sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
           open
         >
           <CircularProgress color="inherit" />
         </Backdrop>
       </div>
     );
   }

    // const {profiles} = props;
    console.log('Profile is: ', profiles);
    return (
      <div className="profile-box">
        <div className="profile-picture">
          <img src={profiles.avatar_url} alt={profiles.name} />
        </div>
        <div className="profile-text">
          <h3>Hi! My Name is {profiles.name}</h3>
          <br />
          <p>Followers: {profiles.followers}</p>
          <p>Following: {profiles.following}</p>
          <p>Public Repos: {profiles.public_repos}</p>
          <br />
          <br />
          <h4>About Me:</h4>
          <br/>
          <p>
            I'm a frontend developer, currently studying in Altschool Africa,
            i'm skilled in HTML, CSS and Javascript. Here's a quick summary
            about me: <br /> š Pronouns: He/him š” Fun fact: I'm currently
            studying at AltSchool Africa School of Software Engineering Class of
            2022. š± Iām currently learning JavaScript and Reactjs. š Iām
            looking for help with open source projects, hackathons, internships,
            and entry-level opportunities. š¼ Job interests: Software Engineer,
            Front Engineer, or UI Engineer (Intern or Junior level). š« You can
            contact me by emailing eguchinedu18@gmail.com.
            <br /> Click Below to view my Github Repo
          </p>
          <div className="button-section">
            <Link to="/repos/1" className="btn">
              View Repos
            </Link>
          </div>
        </div>
      </div>
    );
}