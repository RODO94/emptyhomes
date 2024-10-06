import { useState } from "react";
import "./MultiText.scss";
import { useBoroughStore } from "../../../store";

interface MultiTextProps {
  headline: string;
  showText: string;
}

export default function MultiText({ headline, showText }: MultiTextProps) {
  const [showTextBool, setShowTextBool] = useState<boolean>(false);
  // should have a headline
  // show more text
  // show / hide button
  // should show data based on borough

  const { borough } = useBoroughStore();
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
        {!showTextBool && (
          <button
            onClick={() => setShowTextBool(true)}
            className="multitext__action"
          >
            Show more
          </button>
        )}
        {showTextBool && (
          <button
            onClick={() => setShowTextBool(false)}
            className="multitext__action"
          >
            Show less
          </button>
        )}
        <button onClick={() => {}} className="multitext__action">
          Share
        </button>
      </div>
    </section>
  );
}
