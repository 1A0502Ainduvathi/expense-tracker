@@ -1,8 +1,8 @@
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
