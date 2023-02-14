import React from "react";
import { Category } from "../lib/types";
import "./../css/InfoTable.css";

interface InfoTableProps {
  category: Category;
  updateQuestion: (prop: string, value: any, index: number) => void;
}

export default function InfoTable({
  category,
  updateQuestion,
}: InfoTableProps) {
  const selectedClass = "selector-shared-selected";

  const handleLeftSelector = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const div = e.currentTarget;

    const nextSibling = div.nextElementSibling;
    if (nextSibling) {
      const nextNextSibling = nextSibling.nextElementSibling;
      if (nextNextSibling) {
        div.classList.add(selectedClass);
        nextSibling.classList.remove(selectedClass);
        nextNextSibling.classList.remove(selectedClass);
        updateQuestion("rank", 1, index);
      }
    }
  };

  const handleMidSelector = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const div = e.currentTarget;

    const prevSibling = div.previousElementSibling;
    const nextSibling = div.nextElementSibling;
    if (prevSibling && nextSibling) {
      prevSibling.classList.add(selectedClass);
      div.classList.add(selectedClass);
      nextSibling.classList.remove(selectedClass);
      updateQuestion("rank", 2, index);
    }
  };

  const handleRightSelector = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const div = e.currentTarget;

    const prevSibling = div.previousElementSibling;
    if (prevSibling) {
      const prevPrevSibling = prevSibling.previousElementSibling;
      if (prevPrevSibling) {
        prevPrevSibling.classList.add(selectedClass);
        prevSibling.classList.add(selectedClass);
        div.classList.add(selectedClass);
        updateQuestion("rank", 3, index);
      }
    }
  };
  const handleStarSelector = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const div = e.currentTarget;

    if (div.classList.contains(selectedClass)) {
      div.classList.remove(selectedClass);
      updateQuestion("star", false, index);
    } else {
      div.classList.add(selectedClass);
      updateQuestion("star", true, index);
    }
  };

  return (
    <table className="table-info-section">
      <thead>
        <tr>
          <th>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </th>
          <th>★</th>
          <th>{category.Category}</th>
        </tr>
      </thead>
      <tbody>
        {category.Questions.map((question, index) => (
          <tr key={index}>
            <td>
              <div className="three-selector">
                <div
                  className={
                    "selector-shared three-selector-left" +
                    (question.rank >= 1 ? ` ${selectedClass}` : "")
                  }
                  onClick={(e) => handleLeftSelector(e, index)}
                />
                <div
                  className={
                    "selector-shared three-selector-mid" +
                    (question.rank >= 2 ? ` ${selectedClass}` : "")
                  }
                  onClick={(e) => handleMidSelector(e, index)}
                ></div>
                <div
                  className={
                    "selector-shared three-selector-right" +
                    (question.rank >= 3 ? ` ${selectedClass}` : "")
                  }
                  onClick={(e) => handleRightSelector(e, index)}
                ></div>
              </div>
            </td>
            <td>
              <div
                className={
                  "selector-shared one-selector" +
                  (question.star ? ` ${selectedClass}` : "")
                }
                onClick={(e) => handleStarSelector(e, index)}
              ></div>
            </td>
            <td>{question.Question}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
