import React, { useState, useEffect } from "react";
import FormCard from "../components/FormCard";
import { Form, Category, Question, UserData } from "../lib/types";
import "./../css/Home.css";
import formBuilder from "../Services/BuildForms";

const Home = () => {
  const [forms, setForms] = useState<Form[]>([]);

  async function buildUserForms() {
    const userId = 2
    const forms: Form[] = await formBuilder.getUserForms(userId)
    const userData: UserData[] = await formBuilder.getUserData(userId)
    const questions: Question[] = await formBuilder.getQuestions()
    const categories: Category[] = await formBuilder.getCategories()

    let formData: UserData[]

    forms.forEach(form => {
      formData = userData.filter(d => d.FormId === form.FormId)
      formBuilder.buildForm(form, formData, questions, categories)
    })
    
    setForms(forms)
  }

  useEffect(() => {
    buildUserForms()
  }, [])

  const getTimeSinceLastAss = (forms: Form[], index: number): string => {
    if (index + 1 >= forms.length) return "-"

    const currDate: Date = new Date(forms[index].CreatedDt)
    const nextDate: Date = new Date(forms[index + 1].CreatedDt)
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
