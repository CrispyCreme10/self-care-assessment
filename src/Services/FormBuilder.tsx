import { Form, Category, Question, UserData } from "../lib/types"


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

export default { buildForm }
  