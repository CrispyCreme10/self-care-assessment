import React from 'react'
import { Link } from "react-router-dom";
import './AssessmentCard.css'

const AssessmentCard = ({id, assessmentDetails, timeSinceLastAss}) => {
  const getAvgRank = () => {
    let count = 0;
    let total = 0;
    assessmentDetails.categories.forEach(category => 
      category.lineItems.forEach(lineItem => {
        count++;
        total += lineItem.rank;
      })
    )
    return total / count;
  }

  const getTotalStars = () => {
    let count = 0;
    let total = 0;
    assessmentDetails.categories.forEach(category => 
      category.lineItems.forEach(lineItem => {
        if (lineItem.star) {
          count++;
        }
        total++
      })
    )
    return `${count} / ${total}`;
  }

  return (
    <div className="AssessmentCard">
      <Link 
        to="/view-assessment" 
        className="img-container" 
        state={{ details: assessmentDetails }}>
        <img src="https://wallpapercave.com/wp/1rY39i5.jpg" alt={`assessment #${id}`}/>
        <div className="centered">Click to View</div>
      </Link>
      <div className="content">
        <span className="label">Created</span>
        <span className="value">{assessmentDetails.createAt.toDateString()}</span>
        <span className="label">Average Rank</span>
        <span className="value">{getAvgRank()}</span>
        <span className="label">Starred</span>
        <span className="value">{getTotalStars()}</span>
        <span className="label">Time Since Last Assessment</span>
        <span className="value">{timeSinceLastAss}</span>
      </div>

    </div>
  )
}

export default AssessmentCard