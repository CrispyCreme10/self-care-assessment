import React from 'react'
import './InfoTable.css';

const InfoTable = (props) => {

  const selectedClass = "selector-shared-selected";

  const handleLeftSelector = (e) => {
    const div = e.currentTarget;

    if (div.classList.contains(selectedClass)) {
      div.classList.remove(selectedClass);
    } else {
      div.classList.add(selectedClass);
    }
  }

  const handleMidSelector = (e) => {
    const div = e.currentTarget;

    const prevSibling = div.previousElementSibling;
    if (!prevSibling) return;

    if (div.classList.contains(selectedClass)) {
      prevSibling.classList.remove(selectedClass);
      div.classList.remove(selectedClass);
    } else {
      prevSibling.classList.add(selectedClass);
      div.classList.add(selectedClass);
    }
  }

  const handleRightSelector = (e) => {
    const div = e.currentTarget;

    const prevSibling = div.previousElementSibling;
    if (!prevSibling) return;

    const prevPrevSibling = prevSibling.previousElementSibling;
    if (!prevPrevSibling) return;

    if (div.classList.contains(selectedClass)) {
      prevPrevSibling.classList.remove(selectedClass);
      prevSibling.classList.remove(selectedClass);
      div.classList.remove(selectedClass);
    } else {
      prevPrevSibling.classList.add(selectedClass);
      prevSibling.classList.add(selectedClass);
      div.classList.add(selectedClass);
    }
  }

  const handleStarSelector = (e) => {
    const div = e.currentTarget;

    if (div.classList.contains(selectedClass)) {
      div.classList.remove(selectedClass);
    } else {
      div.classList.add(selectedClass);
    }
  }

  return (
    <table className="table-info-section">
      <thead>
        <tr>
          <th><span>1</span><span>2</span><span>3</span></th>
          <th>★</th>
          <th>{props.categoryName}</th>
        </tr>
      </thead>
      <tbody>
        {props.lineItems.map((lineItem, index) => (
            <tr key={index}>
              <td>
                <div className="three-selector">
                  <div className="selector-shared three-selector-left" onClick={handleLeftSelector}></div>
                  <div className="selector-shared three-selector-mid" onClick={handleMidSelector}></div>
                  <div className="selector-shared three-selector-right" onClick={handleRightSelector}></div>
                </div>
              </td>
              <td>
                <div className="selector-shared one-selector" onClick={handleStarSelector}></div>
              </td>
              <td>{lineItem.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default InfoTable