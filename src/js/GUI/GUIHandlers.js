/**
 * JSQuiz
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import Thread from "wolfuix/js/lib/Thread";

const guiHandlers = {
    answerClickHandler: async function (id) {
        let { currentQuestion, score, questions, answerNotification } = { ...this, ...this.state };

        if (answerNotification !== void 0) {
            return;
        }

        if (currentQuestion.correct === id) {
            score++;
            this.setState({
                score: score,
                answerNotification: true
            });
        }
        else {
            this.setState({
                answerNotification: false
            });
        }

        await Thread.sleep(2500);

        if (questions.answeredQuestions.length === questions.maxQuestionsPerGame) {
            alert(`Game over. Your score: ${score} out of ${questions.maxQuestionsPerGame}!`);
            questions.resetAnsweredQuestions();
            this.setState({
                score: 0
            });
        }

        this.setState({
            answerNotification: void 0,
            currentQuestion: questions.getQuestion(questions.getUnusedRandomId())
        });
    }
};

export default Object.entries(guiHandlers);