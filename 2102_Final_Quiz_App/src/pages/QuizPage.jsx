import React from 'react'

import QuizQuestions from '../components/QuizQuestions';
import questions from "../questions"

const QuizPage = () => {

    return (
        <QuizQuestions questions={questions} />
    );

};

export default QuizPage;