import { useState } from "react";
import { LondonBoroughs } from "../../../types/util";
import "./MultiText.scss";

interface MultiTextProps {
  headline: string;
  showText: string;
  borough?: LondonBoroughs;
}

export default function MultiText({
  headline,
  showText,
  borough,
}: MultiTextProps) {
  const [showTextBool, setShowTextBool] = useState<boolean>(false);
  // should have a headline
  // show more text
  // show / hide button
  // should show data based on borough
  console.log(borough);
  return (
    <section className="multitext">
      <strong>{headline}</strong>
      {showTextBool && (
        <div className="multitext__show-text">
          <p className="multitext__text">{showText}</p>
        </div>
      )}
      <div className="multitext__actions">
        <button
          onClick={() => setShowTextBool(true)}
          className="multitext__action"
        >
          Show more
        </button>
        <button onClick={() => {}} className="multitext__action">
          Share
        </button>
      </div>
    </section>
  );
}
