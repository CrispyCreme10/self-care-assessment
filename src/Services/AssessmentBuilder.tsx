import { Form, Category, Question, UserData, Assessment, ResponseGoup } from "../lib/types"


function buildForm(form: Form, formData: UserData[], questions: Question[], categories: Category[]) {

    form.Categories = []

    questions.forEach(question => {
      let targetData: UserData = formData.find(d => question.QuestionId === d.QuestionId)!
      
      if(targetData.Answer != undefined) {
        question.rank = targetData.Answer
      } else {
        question.rank = 0
      }
      
      if(targetData.Improve != undefined) {
        question.star = targetData.Improve
      }
      else {
        question.star = false
      }
    })
  
    categories.forEach(category => {
      category.Questions = []
      let categoryQuestions: Question[] = questions.filter(q => q.CategoryId === category.CategoryId)
      category.Questions = categoryQuestions
    })
  
    form.Categories = categories
  
    return form
  }

function buildAssessment(userForm: Form, questions: Question[], categories: Category[], data: UserData[]) {
  let assessment: Assessment = {
    Form: userForm,
    ResponseGroups: []
  }



  return null
}

function buildBlankForm(categories: Category[], questions: Question[]) {

  // const form: Form = {
  //   FormId: 0,
  //   UserId: 0,
  //   CreatedDt: new Date, 
  //   UpdateDt: new Date,
  //   Categories: categories
  // }

  // categories.forEach(category => { 
  //     category.Questions = questions.filter(q => q.CategoryId === category.CategoryId)
  // })

  // return form
}

export default { buildForm, buildBlankForm, buildAssessment }
  