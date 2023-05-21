import React, { useState, useEffect } from "react";
import FormCard from "../components/FormCard";
import { Form, Category, Question, UserData, Assessment, BasicAnalyse } from "../lib/types";
import "./../css/Home.css";
import FormApi from "../Services/FormApi";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import AssessmentBuilder from "../Services/AssessmentBuilder";

const Home = () => {
  const [basicAnalyse, setBasicAnalyse] = useState<BasicAnalyse[]>()

  async function getBasicAnalyse() {
    const basicAnalyse: BasicAnalyse[] = await FormApi.getBasicAnalyse(2)
    setBasicAnalyse(basicAnalyse)
  }

  useEffect(() => {
    getBasicAnalyse()
  }, [])

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
            </tr>
          </thead>
          <tbody>
            {basicAnalyse?.map((row, index, arr) => {
              return (
                <tr key={index}>
                  <td>
                    <Link
                      to="/view-assessment" 
                      state={{details: row.FormId}}
                      >
                      {index}
                    </Link>
                    </td>
                  <td>{new Date(row.CreatedDt).toDateString()}</td>
                  <td>{row.AverageRank}</td>
                  <td>{row.TotalStars}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        </div>
    </div>
  );
};

export default Home;