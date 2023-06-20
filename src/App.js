import React from 'react';
import './App.css';
import Question from './components/Question';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

export default function App() {
  const [questionData, setQuestionData] = React.useState([])
  const [isStarted, setIsStarted] = React.useState(false)
  const [endGame, setEndGame] = React.useState(false)
  const [newGame, setNewGame] = React.useState(false)
  const [correctAnswers, setCorrectAnswers] = React.useState(0)

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setQuestionData(data.results.map(question => {
        return {
                correct_answer: question.correct_answer
                .replaceAll("&#039;", "'")
                .replaceAll("&quot;", '"')
                .replaceAll("&ldquo;", '"')
                .replaceAll("&rdquo;", '"')
                .replaceAll("&lsquo;", "'")
                .replaceAll("&rsquo;", "'")
                .replaceAll("&hellip;", '...')
                .replaceAll("&amp;", "&")
                .replaceAll("&lrm;", '')
                .replaceAll("&shy;", '')
                .replaceAll("&Eacute;", 'É')
                .replaceAll("&aacute;", 'á')
                .replaceAll("&eacute;", 'é')
                .replaceAll("&iacute;", 'í')
                .replaceAll("&oacute;", 'ó'), 
                incorrect_answers: question.incorrect_answers,
                question: question.question
                .replaceAll("&#039;", "'")
                .replaceAll("&quot;", '"')
                .replaceAll("&ldquo;", '"')
                .replaceAll("&rdquo;", '"')
                .replaceAll("&lsquo;", "'")
                .replaceAll("&rsquo;", "'")
                .replaceAll("&hellip;", '...')
                .replaceAll("&amp;", "&")
                .replaceAll("&lrm;", '')
                .replaceAll("&shy;", '')
                .replaceAll("&Eacute;", 'É')
                .replaceAll("&aacute;", 'á')
                .replaceAll("&eacute;", 'é')
                .replaceAll("&iacute;", 'í')
                .replaceAll("&oacute;", 'ó'),
                chosen: "",
                id: nanoid(),
                answers: shuffle([
                  {
                    answer: question.incorrect_answers[0]
                    .replaceAll("&#039;", "'")
                    .replaceAll("&quot;", '"')
                    .replaceAll("&ldquo;", '"')
                    .replaceAll("&rdquo;", '"')
                    .replaceAll("&lsquo;", "'")
                    .replaceAll("&rsquo;", "'")
                    .replaceAll("&hellip;", '...')
                    .replaceAll("&amp;", "&")
                    .replaceAll("&lrm;", '')
                    .replaceAll("&Eacute;", 'É')
                    .replaceAll("&aacute;", 'á')
                    .replaceAll("&eacute;", 'é')
                    .replaceAll("&iacute;", 'í')
                    .replaceAll("&oacute;", 'ó'),
                    isChosen: false,
                    id: nanoid()
                  },
                  {
                    answer: question.incorrect_answers[1]
                    .replaceAll("&#039;", "'")
                    .replaceAll("&quot;", '"')
                    .replaceAll("&ldquo;", '"')
                    .replaceAll("&rdquo;", '"')
                    .replaceAll("&lsquo;", "'")
                    .replaceAll("&rsquo;", "'")
                    .replaceAll("&hellip;", '...')
                    .replaceAll("&amp;", "&")
                    .replaceAll("&lrm;", '')
                    .replaceAll("&Eacute;", 'É')
                    .replaceAll("&aacute;", 'á')
                    .replaceAll("&eacute;", 'é')
                    .replaceAll("&iacute;", 'í')
                    .replaceAll("&oacute;", 'ó'),
                    isChosen: false,
                    id: nanoid()
                  },
                  {
                    answer: question.incorrect_answers[2]
                    .replaceAll("&#039;", "'")
                    .replaceAll("&quot;", '"')
                    .replaceAll("&ldquo;", '"')
                    .replaceAll("&rdquo;", '"')
                    .replaceAll("&lsquo;", "'")
                    .replaceAll("&rsquo;", "'")
                    .replaceAll("&hellip;", '...')
                    .replaceAll("&amp;", "&")
                    .replaceAll("&lrm;", '')
                    .replaceAll("&Eacute;", 'É')
                    .replaceAll("&aacute;", 'á')
                    .replaceAll("&eacute;", 'é')
                    .replaceAll("&iacute;", 'í')
                    .replaceAll("&oacute;", 'ó'),
                    isChosen: false,
                    id: nanoid()
                  },
                  {
                    answer: question.correct_answer
                    .replaceAll("&#039;", "'")
                    .replaceAll("&quot;", '"')
                    .replaceAll("&ldquo;", '"')
                    .replaceAll("&rdquo;", '"')
                    .replaceAll("&lsquo;", "'")
                    .replaceAll("&rsquo;", "'")
                    .replaceAll("&hellip;", '...')
                    .replaceAll("&amp;", "&")
                    .replaceAll("&lrm;", '')
                    .replaceAll("&Eacute;", 'É')
                    .replaceAll("&aacute;", 'á')
                    .replaceAll("&eacute;", 'é')
                    .replaceAll("&iacute;", 'í')
                    .replaceAll("&oacute;", 'ó'),
                    isChosen: false,
                    id: nanoid()
                  }
                ])
              }
      })))
  }, [newGame])

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function checkAnswers() {
    for (let i = 0; i < questionData.length; i++) {
      if (questionData[i].chosen === questionData[i].correct_answer) {
        setCorrectAnswers(prevState => prevState + 1)
      }
    }
    setEndGame(true)
  }

  function playAgain() {
    setNewGame(prevState => !prevState)
    setEndGame(false)
    setCorrectAnswers(0)
  }

  const questionElements = questionData.map((question, index) => {
    return (
      <Question 
        key={nanoid()} 
        heading={question.question} 
        answers={question.answers} 
        questionData={questionData}
        setQuestionData={setQuestionData}
        questionId={question.id}
        endGame={endGame}
        index={index}
      />
    )
  })

  return (
    <main>
      {correctAnswers === 5 && <Confetti numberOfPieces={400} recycle={false}/>}
      {isStarted ?
      <section className='game-section'>
        <div className='questions'>
          {questionElements}
        </div>
        <div className='btn-container'>
          {endGame && <h3 className='correct-answers'>You scored {correctAnswers}/5 correct answers!</h3>}
          <button className={`btn ${endGame ? "" : "check-btn"}`} onClick={endGame ? playAgain : checkAnswers}>{endGame ? "Play again" : "Check answers"}</button>
        </div>
      </section>
      :
      <section className='start'>
        <h1>Quizzical</h1>
        <p>Quizzical is a quiz game. Answer all question correct and get a prize!</p>
        <button className='btn' onClick={() => setIsStarted(true)}>Start quiz</button>
      </section>
      }
      <div className='yellow-circle'></div>
    </main>
  )
}
