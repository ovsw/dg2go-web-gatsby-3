import * as React from "react";

import MagSection from "./magSection";

export default function SectionsManager({ section }) {
  let output = (
    <p>WARNING: section type *{section._type}* not found. Please add it</p>
  );
  switch (section._type) {
    case "magSection":
      output = <MagSection sectionData={section} />;
      break;
    default:
      console.log("");
  }

  return output;
}
