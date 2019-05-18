/**
 * JSQuiz
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

import { h } from "preact";
import GUI from "./GUI";

export default class GUIComponent extends GUI {
    constructor () {
        super();
    }

    render ({}, { currentQuestion, score }) {
        const { questions } = this;
        return (
            <div class="p-3">
                <h1 class="justify-content-center d-flex">
                    <div class="js-icon mt-n2">JS</div>
                    Quiz
                </h1>

                { this.showNotification() }

                <h3>Score: { score }/{ questions.maxQuestionsPerGame }</h3>

                <div dangerouslySetInnerHTML={{__html: currentQuestion.text}}/>
                <div class="mx-n2 mt-2 row">
                    {(currentQuestion.answers || []).map((answer, id) => {
                        return (
                            <div class="col-12 col-md-6 p-0" onClick={ () => this.handlers.answerClickHandler(id) }>
                                <div class="answer-card">{ answer }</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}