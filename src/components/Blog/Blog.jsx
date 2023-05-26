import jsPDF from "jspdf";
import React from "react";

const Blog = () => {
  const downloadPdf = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");
    doc.text("This blog page short summary", 20, 30);

    doc.text(
      "In software development, there are two types of components: uncontrolled and controlled. \n Uncontrolled components rely on the browser or environment, while controlled components \n are managed by the application code.  React PropTypes is a way to \n validate props in components. \n Node.js is a runtime environment for executing JavaScript code outside of a web browser, primarily \n used for building server-side applications. \n Custom hooks are a useful tool in React for reusing logic across components.",
      20,
      50
    );

    doc.save("blog-information.pdf");
  };
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 md:w-10/12 mx-auto my-8">
        <div className="border p-4 rounded-lg text-justify">
          <h3 className="text-2xl text-red-700 font-bold">
            1.Tell us the differences between uncontrolled and controlled
            components?
          </h3>
          <br />
          In the context of web development, uncontrolled components and
          controlled components refer to different approaches to managing user
          input in forms. Uncontrolled components allow the user to input data
          directly into the HTML form elements without any additional handling
          by the developer. This approach is typically used for simple forms
          where the data input is straightforward and requires minimal
          validation or processing. In contrast, controlled components are
          managed by the developer and require more code to implement. In this
          approach, the developer creates a state object that holds the values
          of the input fields, and each input element is tied to a specific
          state property. As the user enters data, the state is updated and the
          UI is re-rendered to reflect the changes. This approach allows for
          more precise control over the form's behavior, such as data
          validation, error handling, and conditional rendering. In summary,
          uncontrolled components are easier to implement but offer less control
          over form behavior, while controlled components require more work but
          provide greater flexibility and control.
        </div>
        <div className="border p-4 rounded-lg text-justify">
          <h3 className="text-2xl text-red-700 font-bold">
            2.How to validate React props using PropTypes?
          </h3>
          <br />
          In React, PropTypes is a library used to specify the expected types of
          props that a component should receive. To use PropTypes, you need to
          import it at the beginning of your component file like this.Then, you
          can define the propTypes object for your component, specifying the
          expected types of each prop. For example, if your component expects a
          prop named "name" that should be a string, you would define the
          propTypes object like this.If a prop of an incorrect type is passed to
          the component, a warning will be logged to the console. Using
          PropTypes can help catch errors early on and improve the
          maintainability of your code.
        </div>
        <div className="border p-4 rounded-lg text-justify">
          <h3 className="text-2xl text-red-700 font-bold">
            3.Tell us the difference between nodejs and express js?
          </h3>
          <br />
          Node.js is a JavaScript runtime environment that allows developers to
          execute JavaScript code outside of a web browser. It provides a
          platform for building server-side applications using JavaScript.
          Express.js, on the other hand, is a lightweight web framework built on
          top of Node.js. It provides a set of tools and features to help
          developers build web applications quickly and easily. Express.js
          simplifies the process of creating RESTful APIs, handling HTTP
          requests and responses, managing routes, and working with middleware.
          In summary, Node.js is a runtime environment for executing JavaScript
          code outside of a web browser, while Express.js is a framework built
          on top of Node.js that provides tools and features for building web
          applications.
        </div>
        <div className="border p-4 rounded-lg text-justify">
          <h3 className="text-2xl text-red-700 font-bold">
            4.What is a custom hook, and why will you create a custom hook?
          </h3>
          <br />
          In React, a custom hook is a function that allows developers to
          extract and reuse logic from components. Custom hooks are a way to
          share stateful logic between multiple components without duplicating
          code. Creating a custom hook can be useful in several scenarios. For
          example, if you find yourself repeating the same code across multiple
          components, you can create a custom hook to extract that logic into a
          reusable function. Custom hooks can also help improve code
          organization and maintainability by separating complex logic from the
          components themselves. To create a custom hook in React, you typically
          create a function that returns an object with one or more values or
          functions. You can then use this hook in your components by calling
          the function and destructuring the values or functions returned.
          Overall, creating custom hooks can help reduce code duplication,
          improve code organization, and make it easier to maintain and update
          your codebase.
        </div>
      </div>
      <button className="btn block mx-auto mb-8" onClick={downloadPdf}>
        Download PDF
      </button>
    </>
  );
};

export default Blog;
