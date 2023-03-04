import React, { useState, useEffect } from "react";
import FormCard from "../components/FormCard";
//import { generateRandomAssessment } from "../lib/test";
import { Form, Category, Question, UserData } from "../lib/types";
import "./../css/Home.css";

const GET_FORMS_URL = "";

const Home = () => {
  const [forms, setForms] = useState<Form[]>([]);

  async function buildUserForms() {
    const userId = 2
    const forms: Form[] = await getUserForms(userId)
    const userData: UserData[] = await getUserData(userId)
    const questions: Question[] = await getQuestions()
    const categories: Category[] = await getCategories()

    let formData: UserData[]
    console.log(userData)
    console.log(forms.length)

    forms.forEach(form => {
      console.log(form)
      formData = userData.filter(d => d.FormId === form.FormId)
      console.log(formData)
      buildForm(form, formData, questions, categories)
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

async function getUserForms(userId: number): Promise<Form[]> {
  let body
  try {
    let response = await fetch(`http://localhost:5001/form/${userId}`)
    body = await response.json()

    return body
  }
  catch(error){
    console.log(error)
  }

  return body
}

async function getCategories(): Promise<Category[]> {
  let body
  try {
    let response = await fetch('http://localhost:5001/GetCategories')
    body = await response.json()
    
    return body
    
  }
  catch(error){
    console.log(error)
  }
  
  return body
}

async function getQuestions(): Promise<Question[]> {
  let body
  try {
    let response = await fetch('http://localhost:5001/GetQuestions')
    body = await response.json()
    
    return body
  }
  catch(error){
    console.log(error)
  }

  return body
}

async function getUserData(userId: number): Promise<UserData[]> {
  let body
  try {
    let response = await fetch(`http://localhost:5001/userData/${userId}`)
    body = await response.json()
    
    return body
  }
  catch(error){
    console.log(error)
  }


  return body
  
}

function buildForm(form: Form, formData: UserData[], questions: Question[], categories: Category[]) {
  form.Categories = []

  console.log(formData)

  questions.forEach(question => {
    let targetData: UserData = formData.find(d => question.QuestionId === d.QuestionId)!
    console.log(formData.find(d => question.QuestionId === d.QuestionId)!)
    question.rank = targetData.Answer
    question.star = targetData.Improve
  })

  categories.forEach(category => {
    category.Questions = []
    let categoryQuestions: Question[] = questions.filter(q => q.CategoryId === category.CategoryId)
    category.Questions = categoryQuestions
  })

  form.Categories = categories

  return form
}

export default Home;
