import React from 'react';
import InfoTable from "../components/InfoTable";
import { useLocation } from 'react-router-dom'
import './Assessment.css'

const Assessment = ({readOnly}) => {
  const location = useLocation();
  const { details } = location.state || {};
  const [categoryDetails, setCategoryDetails] = React.useState(details);

  const updateLineItem = (prop, value, index) => {
    const old = categoryDetails[index];
    const updatedLineItem = { ...old, [prop]: value }
    const lineItemsClone = [...categoryDetails];
    lineItemsClone[index] = updatedLineItem;
    setCategoryDetails(lineItemsClone);
  }

  const saveFormData = () => {
    // send form data state to backend
    console.log(categoryDetails);
  }

  const clearFormData = () => {

  }

  return (
    <div className="NewAssessment">
      <div className="content">
        <div className="panel details-panel">
          <h1>Self-Care Assessment</h1>
          {details.createAt &&
            <h4>Created: {details.createAt.toDateString()}</h4>
          }

          <div id="text">
            <p><span>Self-care</span> activities are the things you do to maintain good health and improve well-being. You'll  find that many of these activities are things you already do as part of your normal routine.</p>
            <p>In this assessment you will think about how frequently, or how well, you are performing different  self-care activities. The goal of this assessment is to help you learn about your self-care needs  by spotting patterns and recognizing areas of your life that need more attention.</p>
            <p>There are no right or wrong answers on this assessment. There may be activities that you have  no interest in, and other activities may not be included. This list is not comprehensive, but serves  as a starting point for thinking about your self-care needs.</p>
          </div>

          <div className="legend">
            <div className="legend-row">
              <span className="key">1</span>
              <span className="desc-1">I do this poorly</span>
              <span className="desc-2">I do this rarely or not at all</span>
            </div>
            <div className="legend-row">
              <span className="key">2</span>
              <span className="desc-1">I do this OK</span>
              <span className="desc-2">I do this sometimes</span>
            </div>
            <div className="legend-row">
              <span className="key">3</span>
              <span className="desc-1">I do this well</span>
              <span className="desc-2">I do this often</span>
            </div>
            <div className="legend-row">
              <span className="key">★</span>
              <span className="desc-1">I would like to improve at this</span>
              <span className="desc-2">I would like to do this more frequently</span>
            </div>
          </div>
        </div>

        <div className="panel data-panel">
          {categoryDetails.categories.map((category, index) => {
            return <InfoTable
                      key={index}
                      categoryName={category.categoryName} 
                      lineItems={category.lineItems} 
                      updateLineItem={updateLineItem} />
          })}
        </div>
      </div>
      
      {!readOnly && 
        <div className="button-container">
          <button className="global-btn" onClick={saveFormData}>Save</button>
          <button className="global-btn" onClick={clearFormData}>Clear All</button>
        </div>
      }
      
    </div>
  );
}

export default Assessment