import React, { useState, useEffect } from "react";
import FormCard from "../components/FormCard";
import { generateRandomAssessment } from "../lib/test";
import { Form } from "../lib/types";
import "./Home.css";

const GET_FORMS_URL = "";

const Home = () => {
  const [forms, setForms] = useState<Form[]>([]);

  const fetchForms = async () => {
    setForms(testForms);
    // uncomment to use api code
    // const response = await fetch(GET_FORMS_URL);
    // const data = await response.json();
    // setForms(data);
  }

  useEffect(() => {
    fetchForms();
  }, [])
  

  const testForms = (): Form[] => {
    const list = [];
    const numOfTestCards = 8;
    for (let i = 0; i < numOfTestCards; i++) {
      list.push(generateRandomAssessment());
    }
    return list.sort((a, b) => {
      if (!a.createAt || !b.createAt)
        return 0;

      return b.createAt.getTime() - a.createAt.getTime();
    });
  };

  const getTimeSinceLastAss = (forms: Form[], index: number) => {
    if (index + 1 >= forms.length) return "-";

    const currDate = forms[index].createAt;
    const nextDate = forms[index + 1].createAt;
    let output = "Error";
    if (!currDate || !nextDate)
      return output;
    
    const msDiff = currDate.getTime() - nextDate.getTime();
    const seconds = msDiff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const years = weeks / 52;

    
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
  };

  return (
    <div className="Home">
      <div className="card-container">
        {forms.map((ass, index, arr) => {
          return (
            <FormCard
              key={index}
              id={index}
              formDetails={ass}
              timeSinceLastAss={getTimeSinceLastAss(arr, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
