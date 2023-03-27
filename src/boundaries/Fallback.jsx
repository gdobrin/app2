import React from "react";

const Fallback = ({ error }) => (
  <section>
      <h3>Oops! An error occured!</h3>
      <p>
        <strong>Error:</strong> {error.toString()}
      </p>
  </section>
);

export default Fallback;
