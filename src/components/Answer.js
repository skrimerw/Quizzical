import './Answer.css'

export default function Answer(props) {
    

    /*const stylesCorrect = {
        backgroundColor: props.questionData.correct_answer === props.questionData.chosen && props.isChosen ? "#8fd0a3" : "#f4d4d7",
        color: props.questionData.correct_answer === props.questionData.chosen && props.isChosen ? "#27613f" : "#bda3a8",
        border: props.questionData.correct_answer === props.questionData.chosen && props.isChosen ? "2px solid #8fd0a3" : "2px solid #f4d4d7"
    }

    const stylesIncorrect = {
        backgroundColor: props.questionData.correct_answer !== props.questionData.chosen && props.isChosen ? "#f4d4d7" : "#f1f5f8",
        color: props.questionData.correct_answer !== props.questionData.chosen && props.isChosen ? "#bda3a8" : "rgba(0, 0, 0, 0.6)",
        border: props.questionData.correct_answer !== props.questionData.chosen && props.isChosen ? "2px solid #f4d4d7" : "2px solid rgba(0, 0, 0, 0.3)"
    }*/
    let styles = {}

    if (props.questionData.correct_answer === props.answer && props.endGame) {
        styles = {
            backgroundColor: "#8fd0a3",
            color: "#27613f",
            border: "2px solid #8fd0a3"
        }
    } else if (props.questionData.correct_answer !== props.answer && props.isChosen  && props.endGame) {
        styles = {
            backgroundColor: "#f4d4d7",
            color: "#bda3a8",
            border: "2px solid #f4d4d7"
        }
    } else {
        styles = {
            backgroundColor: props.isChosen ? "#d1d5f5" : "#f1f5f8",
            color: props.isChosen ? "#5f6585" : "rgba(0, 0, 0, 0.6)",
            border: props.isChosen ? "2px solid #d1d5f5" : "2px solid rgba(0, 0, 0, 0.3)"
        }
    }

    return (
        <div className="answer" onClick={props.handleClick} style={styles}>{props.answer}</div>
    )
}