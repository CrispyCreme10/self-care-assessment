import React from 'react'
import './InfoTable.css';

const InfoTable = ({categoryName, lineItems}) => {

  const selectedClass = "selector-shared-selected";

  const handleLeftSelector = (e) => {
    if (e.target.classList.contains(selectedClass)) {
      e.target.classList.remove(selectedClass);
    } else {
      e.target.classList.add(selectedClass);
    }
  }

  const handleMidSelector = (e) => {
    if (e.target.classList.contains(selectedClass)) {
      e.target.previousElementSibling.classList.remove(selectedClass);
      e.target.classList.remove(selectedClass);
    } else {
      e.target.previousElementSibling.classList.add(selectedClass);
      e.target.classList.add(selectedClass);
    }
  }

  const handleRightSelector = (e) => {
    if (e.target.classList.contains(selectedClass)) {
      e.target.previousElementSibling.previousElementSibling.classList.remove(selectedClass);
      e.target.previousElementSibling.classList.remove(selectedClass);
      e.target.classList.remove(selectedClass);
    } else {
      e.target.previousElementSibling.previousElementSibling.classList.add(selectedClass);
      e.target.previousElementSibling.classList.add(selectedClass);
      e.target.classList.add(selectedClass);
    }
  }

  const handleStarSelector = (e) => {
    if (e.target.classList.contains(selectedClass)) {
      e.target.classList.remove(selectedClass);
    } else {
      e.target.classList.add(selectedClass);
    }
  }

  return (
    <table className="table-info-section">
      <thead>
        <tr>
          <th><span>1</span><span>2</span><span>3</span></th>
          <th>★</th>
          <th>{categoryName}</th>
        </tr>
      </thead>
      <tbody>
        {lineItems.map((lineItem, index) => (
            <tr key={index}>
              <td>
                <div className="three-selector">
                  <div className="selector-shared three-selector-left" onClick={e => handleLeftSelector(e, index)}></div>
                  <div className="selector-shared three-selector-mid" onClick={e => handleMidSelector(e, index)}></div>
                  <div className="selector-shared three-selector-right" onClick={e => handleRightSelector(e, index)}></div>
                </div>
              </td>
              <td>
                <div className="selector-shared one-selector" onClick={e => handleStarSelector(e, index)}></div>
              </td>
              <td>{lineItem.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default InfoTable