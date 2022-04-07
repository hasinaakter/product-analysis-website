import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <h1>BLOG</h1>
      <div className="question">
        <h2>(1) What is Context API?</h2>
        <p>
          A React app can use the React Context API to generate global variables
          that can be passed around. This is an alternative to "prop drilling,"
          which entails passing props from grandparent to child to parent and so
          on. Context is also marketed as a simpler, lighter way to Redux state
          management. eact.create All you need is Context(). It will give you a
          customer and a provider. Provider is a component that provides the
          state to its children, as its name suggests. It will include the
          "store" and serve as the parent of all components that may need it.
        </p>
      </div>
      <div className="question">
        <h2> (2) What is different between Inline block and Inline element?</h2>
        <p>
          {" "}
          Inline block: Displays an element as an inline element. Any height and
          width properties will have no effect. Here are a few elements that
          have a default inline property:span,a,img etc.
          <br></br> Displays an element as an inline-level block container. You
          can set height and width values. Here are a few elements that have a
          default block property:div,p,section,li,p etc.
        </p>
      </div>
    </div>
  );
};

export default Blog;
