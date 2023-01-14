import React from 'react'
import './InfoTable.css';

const InfoTable = ({categoryName, lineItems, updateLineItem}) => {
  const selectedClass = "selector-shared-selected";

  const handleLeftSelector = (e, index) => {
    const div = e.currentTarget;

    const nextSibling = div.nextElementSibling;
    const nextNextSibling = nextSibling.nextElementSibling;
    div.classList.add(selectedClass);
    nextSibling.classList.remove(selectedClass);
    nextNextSibling.classList.remove(selectedClass);
    updateLineItem("rank", 1, index);
  }

  const handleMidSelector = (e, index) => {
    const div = e.currentTarget;

    const prevSibling = div.previousElementSibling;
    const nextSibling = div.nextElementSibling;
    prevSibling.classList.add(selectedClass);
    div.classList.add(selectedClass);
    nextSibling.classList.remove(selectedClass);
    updateLineItem("rank", 2, index);
  }

  const handleRightSelector = (e, index) => {
    const div = e.currentTarget;

    const prevSibling = div.previousElementSibling;
    const prevPrevSibling = prevSibling.previousElementSibling;
    prevPrevSibling.classList.add(selectedClass);
    prevSibling.classList.add(selectedClass);
    div.classList.add(selectedClass);
    updateLineItem("rank", 3, index);
  }

  const handleStarSelector = (e, index) => {
    const div = e.currentTarget;

    if (div.classList.contains(selectedClass)) {
      div.classList.remove(selectedClass);
      updateLineItem("star", false, index);
    } else {
      div.classList.add(selectedClass);
      updateLineItem("star", true, index);
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