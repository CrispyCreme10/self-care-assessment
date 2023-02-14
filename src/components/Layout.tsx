import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Category, Form, Question } from "../lib/types";
import './../css/Layout.css';

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

const Layout = () => {
  const [form, setForm] = React.useState<Form>()
  useEffect(() => { generateBlankAssessment() }, [])

  async function generateBlankAssessment()  {
    const catigories: Category[] = await getCategories()
    const questions: Question[] = await getQuestions()

    catigories.forEach(category => {
      category.Questions = []
      const catigoryQuestions = questions.filter(question => question.CategoryId === category.CategoryId)
      if(catigoryQuestions)
        category.Questions = catigoryQuestions
    })
    const newForm: Form = {FormId: -1, UserId: 0, Categories: catigories, CreateAt: new Date(), UpdatedAt: new Date()}
    setForm(newForm)
  }
  

  return (
    <>
      <div className="Layout">
        <Link to="/" className="item">Home</Link>
        <Link 
          to="/new-assessment" 
          className="item"
          state={{ details: form}}
        >
            New Assessment
        </Link>
      </div>

      <Outlet />
    </>
  )
};

export default Layout