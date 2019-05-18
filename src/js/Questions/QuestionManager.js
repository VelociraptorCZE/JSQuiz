/**
 * JSQuiz
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

const maxQuestionsPerGame = Symbol("maxQuestions");

export default class QuestionManager {
    constructor () {
        this.resetAnsweredQuestions();
        this.resetAnswerBuffer();
        this[maxQuestionsPerGame] = 5;
    }

    get allQuestionsAnswered () {
        return this.answerBuffer.length === this.questionList.length - 1;
    }

    get maxQuestionsPerGame () {
        return this[maxQuestionsPerGame];
    }

    resetAnswerBuffer () {
        this.answerBuffer = [];
    }

    resetAnsweredQuestions () {
        this.answeredQuestions = [];
    }

    async fetchQuestions () {
        const questionResponse = await fetch("dist/QuestionList.json");
        this.questionList = await questionResponse.json();
    }

    getQuestion (id) {
        this.answeredQuestions.push(id);
        this.answerBuffer.push(id);
        return this.questionList[id];
    }

    getRandomId () {
        return Math.round(Math.random() * (this.questionList.length - 1));
    }

    getUnusedRandomId () {
        let randomId, { answeredQuestions } = this;

        if (this.allQuestionsAnswered) {
            this.resetAnswerBuffer();
        }

        while (!randomId || answeredQuestions.includes(randomId) || this.answerBuffer.includes(randomId)) {
            randomId = this.getRandomId();
        }

        return randomId;
    }
}