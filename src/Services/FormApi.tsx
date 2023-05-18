import { Form, Category, Question, UserData } from './../lib/types'
import Config from '../../config'

async function getUserForms(userId: number): Promise<Form[]> {
    let body
    try {
      let response = await fetch(Config.getForms + userId)
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
      let response = await fetch(Config.getCategories)
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
      let response = await fetch(Config.getQuestions)
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
        let response = await fetch(Config.getUserData + userId)
        body = await response.json()
        
        return body
    }
    catch(error){
        console.log(error)
    }
    
    return body        
}

async function createForm(userId: number): Promise<number> {
  userId = 2 //TODO: Delete when Multiple users are supported
  let body
  const requestOptions = {method: 'POST'}

  try {
    let response = await fetch(Config.createForm + userId, requestOptions)
    body = await response.json()

    return body[0].FormId
  }
  catch(error) {
    console.log(error)
  }

  return body[0].FormId
}

async function addUserData(userData: UserData): Promise<string> {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }
  try {
    const resposne = await fetch(Config.createUserData, requestOptions)
    const body = await resposne.json()

    return body
  }
  catch(error) {
    console.log(error)
  }

  return "faild"
}

/**
 * Gets the Bacis Analyse for every from for a given user
 * @param userId 
 * @returns {BasicAnalyse[]}
 */
async function getBasicAnalyse(userId: number) {
    let body
    try {
        let response = await fetch(Config.getAnalysis + userId)
        body = await response.json()
        
        return body
    }
    catch(error){
        console.log(error)
    }
    
    return body        

}


export default {
  getCategories, 
  getQuestions, 
  getUserData, 
  getUserForms, 
  createForm, 
  addUserData,
  getBasicAnalyse
}