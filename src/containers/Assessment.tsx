import React, {useEffect} from 'react';
import InfoTable from "../components/InfoTable";
import { useLocation } from 'react-router-dom'
import './../css/Assessment.css'
import { Category, Form, Question, UserData} from '../lib/types';
import FormApi from '../Services/FormApi';
import FormBuilder from '../Services/FormBuilder';

interface FormProps {
  readOnly: boolean
}

export default function Assessment({readOnly}: FormProps) {
  const location = useLocation();
  const { details } = location.state || {};
  const [form, SetForm] = React.useState<Form>(details);

  const updateQuestion = (prop: string, value: any, questionId: number, categoryId: number): void => {
    let cat: Category = form.Categories.find(c => c.CategoryId == categoryId)!
    let qu: Question = cat.Questions.find(q => q.QuestionId == questionId)!

    if(prop == "rank"){
       qu.rank = value
    } 
    else {
      qu.star = value
    }
  }

  async function buildForm() {
    const categories: Category[] = await FormApi.getCategories()
    const questions: Question[] = await FormApi.getQuestions()

    const form: Form = await FormBuilder.buildBlankForm(categories, questions)

    SetForm(form)
  }

  useEffect(() => {
      buildForm()
  }, [])

  async function saveFormData() {
    let userId= 2 //TODO: Delete when multi user supported
    let formId: number = await FormApi.createForm(userId)

    form.Categories.forEach(category => {
      category.Questions.forEach(question => {
        if(question.star === undefined) {
          question.star = false
        }

        if(question.rank === undefined) {
          question.rank = 0
        }

        let data: UserData = {
          UserId: userId,
          QuestionId: question.QuestionId,
          FormId: formId,
          Answer: question.rank, 
          Improve: question.star
        }

        console.log("user data: ", data)

        FormApi.addUserData(data)
      })
    })
  }

  const clearFormData = () => {

  }

  return (
    <div className="NewForm">
      <div className="content">
        <div className="panel details-panel">
          <h1>Self-Care Form</h1>
          {details?.CreateAt &&
            <h4>Created: {details?.CreateAt.toDateString()}</h4>
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
          {form.Categories?.map((category, index) => {
            return <InfoTable
                      key={index}
                      category={category} 
                      updateQuestion={updateQuestion} />
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