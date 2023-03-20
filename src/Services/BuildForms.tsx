import { Form, Category, Question, UserData } from "../lib/types"
require('dotenv').config()


function buildForm(form: Form, formData: UserData[], questions: Question[], categories: Category[]) {
    form.Categories = []
  
    questions.forEach(question => {
      let targetData: UserData = formData.find(d => question.QuestionId === d.QuestionId)!
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

async function getUserForms(userId: number): Promise<Form[]> {
    let env: String  = process.env
    
    if ( typeof process.env === undefined)
        env = 'none'

    let body
    try {
      let response = await fetch(env.REACT_APP_GET_FORMS + userId)
      body = await response.json()
  
      return body
    }
    catch(error) { console.log(error) }
  
    return body
}
  
async function getCategories(): Promise<Category[]> {
    let body
    try {
      let response = await fetch(process.env.GET_CATEGORIES)
      body = await response.json()
      
      return body
      
    }
    catch(error){ console.log(error) }
    
    return body
}
  
async function getQuestions(): Promise<Question[]> {
    let body
    try {
      let response = await fetch(dotenv.process.env.GET_QUESTION)
      body = await response.json()
      
      return body
    }
    catch(error) { console.log(error) }
  
    return body
}
  
async function getUserData(userId: number): Promise<UserData[]> {
    let body
    try {
      let response = await fetch(process.env.GET_USER_DATA + userId)
      body = await response.json()
      
      return body
    }
    catch(error) { console.log(error) }
    
    return body
}

export default { getUserForms, getUserData, getQuestions, getCategories, buildForm }
  