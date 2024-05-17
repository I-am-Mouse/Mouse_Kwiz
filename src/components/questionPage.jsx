
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuestionPage = () => {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    const params = useParams();

    const handleClicked = (option) => {

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            displayResult();
        }
         console.log(questions[currentIndex].rightOption);
        if (option === questions[currentIndex].rightOption) {
            setScore(score + 10);
        }
    };

    const displayResult = () => {

      const scorePercentage = ((score / (questions.length * 10)) * 100).toFixed();
      
      localStorage.setItem('result', (`Your score is ${score} out of ${questions.length * 10}. That's a ${scorePercentage}%!`));
      window.location.href = '/resultpage';
    };

    useEffect(() => {
        const apiURL = `http://localhost:5000/api/questions/${params.topic}`;
        console.log(params.topic);
        
        fetch(apiURL)
        .then((res) => res.json())
        .then(res => {
            setQuestions(res.questions);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <>
            <div className="questionPage">
                {
                    <>
                        <div>
                            <h1>{questions[currentIndex]?.topic}</h1>
                            <p>{questions[currentIndex]?.question}</p>
                        </div>
                        <div>
                            <nav>
                                <ol>
                                    {
                                        questions[currentIndex]?.options.map(option => {
                                            return <li onClick={()=> handleClicked(option)}>{option}</li>
                                        })
                                    }                                    
                                </ol>
                            </nav>
                        </div>
                    </> 
                }
            </div>
        </>
    )
}
export default QuestionPage;