import { Form, Category, Question, UserData, Assessment, ResponseGoup, Response } from "../lib/types"

/**
 * Builds Assessment 
 * @param userForm 
 * @param questions 
 * @param categories 
 * @param data 
 * @returns Assessment 
 */
function buildAssessment(userForm: Form, questions: Question[], categories: Category[], data: UserData[]): Assessment {
  let rgs: ResponseGoup[] = []
  
  categories.forEach(category => {
    let categoryQuestions: Question[] = questions.filter(q => q.CategoryId === category.CategoryId)
    let r: Response[] = []
    
    categoryQuestions.forEach(question => {
      let d: UserData = data.find(d => d.QuestionId === question.QuestionId)! // (!) protection of undefined 
      let response: Response = {
        QuestionId: question.QuestionId,
        Question: question.Question,
        CategoryId: question.CategoryId,
        value: d.Answer,
        stared: d.Improve
      }
      
      r.push(response)
    })
    
    let rg: ResponseGoup = {
      CategoryId: category.CategoryId,
      Category: category.Category,
      Responses: r
    }

    rgs.push(rg)
  })

  let assessment: Assessment = {
    Form: userForm,
    ResponseGroups: rgs
  }
  
  return assessment
}

export default { buildAssessment }
  