/**
 * JSQuiz
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

// some polyfills to make this app work in IE

import regeneratorRuntime from "regenerator-runtime";
import "es6-symbol/implement";
import "wolfuix/js/polyfill/ObjectPolyfill";
import "wolfuix/js/polyfill/ArrayPolyfill";
import "promise-polyfill/src/polyfill";
import "whatwg-fetch";

// modules

import { h, render } from "preact";
import GUIView from "./GUI/GUIView.jsx";

render(<GUIView/>, document.body);