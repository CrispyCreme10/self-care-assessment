import React from 'react'
import AssessmentCard from "../components/AssessmentCard"
import {generateRandomAssessment as gra} from "../modules/test.js"
import './Home.css'

const Home = () => {

  const assessments = () => {
    const list = [];
    const numOfTestCards = 8;
    for(let i = 0; i < numOfTestCards; i++) {
      list.push(gra());
    }
    return list.sort((a, b) => {
      return b.createAt - a.createAt;
    });
  }

  const getTimeSinceLastAss = (assessments, index) => {
    if (index + 1 >= assessments.length) return "-";

    const currDate = assessments[index].createAt;
    const nextDate = assessments[index + 1].createAt;
    const msDiff = currDate - nextDate;
    const seconds = msDiff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const years = weeks / 52;
    
    let output = "Error";
    if (years > 1) {
      output = `${Math.floor(years)} years ago`;
    } else if (weeks > 1) {
      output = `${Math.floor(weeks)} weeks ago`;
    } else if (days > 1) {
      output = `${Math.floor(days)} days ago`;
    } else if (hours > 1) {
      output = `${Math.floor(hours)} hours ago`;
    } else if (minutes > 1) {
      output = `${Math.floor(minutes)} minutes ago`;
    } else if (seconds > 1) {
      output = `${Math.floor(seconds)} seconds ago`;
    }

    return output;
  }

  return (
    <div className="Home">
      <div className="card-container">
        {assessments().map((ass, index, arr) => {
          return <AssessmentCard key={index} id={index} assessmentDetails={ass} timeSinceLastAss={getTimeSinceLastAss(arr, index)}/>
        })}
      </div>
    </div>
  )
}

export default Home