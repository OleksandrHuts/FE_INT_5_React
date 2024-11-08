import { useState } from "react"

export default function GamePage() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [userAnswer, setUserAnswer] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [time, setTime] = useState(20);

    function getRandom() {
        return parseInt(Math.random() * 100);
    }

    function refreshNumber() {
        setNum1(getRandom());
        setNum2(getRandom());
    }

    function startGame() {
        setIsStarted(true);
        refreshNumber();
        startCountDown();
    }

    function startCountDown() {
        const timerInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval);
                    setIsStarted(false);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }

    function submitHandler() {
        const isCorrect = +userAnswer === num1 + num2;
        isCorrect && setUserScore(userScore + 1);

        refreshNumber();
    }

    return (
        <div className="container">
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary play_card">
                    <div className="card-header py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Score: {userScore}</h4>
                        <h4 className="my-0 fw-normal">Time left: {time} sec</h4>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title pricing-card-title">{num1} + {num2}</h2>
                        {
                            isStarted && <><h3>Your answer:</h3>
                                <div className="input-group mb-3 mt-3">
                                    <input onChange={(e) => setUserAnswer(e.target.value)} type="text" className="form-control" />
                                </div></>
                        }
                        {
                            isStarted ?
                                <button onClick={submitHandler} type="button" className="w-100 btn btn-lg btn-primary">Submit</button> :
                                <button onClick={startGame} type="button" className="w-100 btn btn-lg btn-primary">Start</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}