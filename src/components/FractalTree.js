import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

let angle;

const Sketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(600, 600, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle += 0.01;
    branch(150);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;