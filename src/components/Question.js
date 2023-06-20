import "./Question.css"
import Answer from "./Answer"
import { nanoid } from "nanoid"
import React from "react"

export default function Question(props) {
    function chooseAnswer(questionId, answerId) {
        if (!props.endGame) {
            props.setQuestionData(oldData => oldData.map(question => {
                const updatedAnswers = question.answers.map(answer => {
                    if (answer.id !== answerId && answer.isChosen === true && question.id === questionId) {
                        answer.isChosen = !answer.isChosen
                    }
                    if (answer.id === answerId) {
                        question.chosen = answer.answer 
                    } 
                    return answer.id === answerId ? {...answer, isChosen: !answer.isChosen} : answer
                })
                return {...question, answers: updatedAnswers}
            }))
        }
    }

    const answerElements = props.answers.map(answer => {
        return <Answer 
                    key={nanoid()} 
                    answer={answer.answer} 
                    handleClick={() => chooseAnswer(props.questionId, answer.id)} 
                    isChosen={answer.isChosen} 
                    questionData={props.questionData[props.index]}
                    endGame={props.endGame}
                    //setQuestionData={props.setQuestionData}
                />
    })

    return (
        <div className="question-body">
            <h2 className="heading">{props.heading}</h2>
            <div className="answers">
                {answerElements}
            </div>
        </div>
    )
}