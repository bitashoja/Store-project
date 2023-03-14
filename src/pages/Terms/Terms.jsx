import * as React from "react";
import HeaderTerms from "../../components/headerTerms/HeaderTerms";
import TextTerms from "../../components/textTerms/TextTerms";
import "./terms.css";

export default function Terms() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderTerms />
      <TextTerms />
    </div>
  );
}
