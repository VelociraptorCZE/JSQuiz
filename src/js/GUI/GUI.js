/**
 * JSQuiz
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import { Component, h } from "preact";
import QuestionManager from "../Questions/QuestionManager";
import handlers from "./GUIHandlers";
import Thread from "wolfuix/js/lib/Thread";
import HighlightES from "@raichlsimon/highlight_es/js/HighlightES";

export default class GUI extends Component {
    constructor (props) {
        super(props);
        this.handlers = {};
        this.state = {
            score: 0,
            currentQuestion: {}
        };

        this.setQuestionManager();
        this.initHandlers();
    }

    componentDidUpdate() {
        new HighlightES("code");
    }

    async setQuestionManager () {
        this.questions = new QuestionManager();
        await this.questions.fetchQuestions();
        this.setState({
            currentQuestion: this.questions.getQuestion(this.questions.getRandomId())
        });
    }

    showNotification () {
        const { answerNotification } = this.state;

        if (answerNotification !== void 0) {
            return (
                <div class={`notification notification-${answerNotification}`}>
                    {answerNotification ? "Correct!" : "Incorrect!"}
                </div>
            );
        }

        return "";
    }

    initHandlers () {
        handlers.forEach(([ name, handler ]) => {
            this.handlers[name] = handler.bind(this);
        });
    }
}