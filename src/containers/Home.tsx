import React, { useState, useEffect } from "react";
import FormCard from "../components/FormCard";
import { Form, Category, Question, UserData, Assessment } from "../lib/types";
import "./../css/Home.css";
import FormApi from "../Services/FormApi";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import AssessmentBuilder from "../Services/AssessmentBuilder";

const Home = () => {
  // TODO: Display Basic Analyse for the user
  // TODO: Delete unneeded functions
  // TODO: Refactor building a form

  const [assessments, setAssessments] = useState<Assessment[]>();

  async function buildUserForms() {
    // const userId = 2
    // const forms: Form[] = await FormApi.getUserForms(userId)
    // const userData: UserData[] = await FormApi.getUserData(userId)
    // const questions: Question[] = await FormApi.getQuestions()
    // const categories: Category[] = await FormApi.getCategories()

    // let formData: UserData[] 
    // let assessments: Assessment[] = []

    // forms.forEach(form => {
    //   formData = userData.filter(d => d.FormId === form.FormId)
    //   let assessment: Assessment = AssessmentBuilder.buildAssessment(form, questions, categories, userData)
    //   assessments.push(assessment)
    // })
    
    // setAssessments(assessments)
    // console.log('All Form: ', forms)

    const test = await FormApi.getBasicAnalyse(2)
    console.log('Test:', test)
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

  const getTotalStars = (assessment: Form) => {
  //   let count = 0;
  //   let total = 0;
  //   assessment.Categories.forEach(category => 
  //     category.Questions.forEach(question => {
  //       if (question.star) {
  //         count++;
  //       }
  //       total++
  //     })
  //   )
  //   return `${count} / ${total}`;
  // }

  // const getAvgRank = (assessment: Form) => {
  //   let count = 0;
  //   let total = 0;
  //   assessment.Categories.forEach(category => 
  //     category.Questions.forEach(question => {
  //       count++;
  //       total += question.rank;
  //     })
  //   )
  //   return total / count;
  }

  function getFormCreatedDate(assessment: Form): string {
    const formCreateDate: Date = new Date(assessment.CreatedDt)
    return formCreateDate.toDateString()
  }


  return (
    <div className="Home">
      <div className="card-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>created</th>
              <th>Average Rank</th>
              <th>Total Stars</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* {forms?.map((assestment, index, arr) => {
              return (
                <tr key={index}>
                  <td>
                    <Link
                      to="/view-assessment" 
                      state={{details: assestment}}
                      >
                      {index}
                    </Link>
                    </td>
                  <td>{getFormCreatedDate(assestment)}</td>
                  <td>{getAvgRank(assestment)}</td>
                  <td>{getTotalStars(assestment)}</td>
                  <td>{getTimeSinceLastAss(arr, index)}</td>
                </tr>
              )
            })} */}
          </tbody>
        </Table>

        </div>
    </div>
  );
};

export default Home;