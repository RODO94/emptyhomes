import { useState } from "react";
import "./MultiText.scss";
import { useBoroughStore } from "../../../store";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material";

interface MultiTextProps {
  headline: string;
  showText: string;
}

export const BoroughChip = styled(Chip)((theme) => ({
  fontFamily: '"Montserrat", system-ui, Avenir, Helvetica, Arial, sans-serif;',
  fontWeight: 700,
  fontSize: "0.75rem",
  fontVariant: "all-small-caps",
}));

export default function MultiText({ headline, showText }: MultiTextProps) {
  const [showTextBool, setShowTextBool] = useState<boolean>(false);
  // should have a headline
  // show more text
  // show / hide button
  // should show data based on borough

  const { borough } = useBoroughStore();

  return (
    <section className="multitext">
      <div className="multitext__headline-wrap">
        <strong>{headline}</strong>
        <Chip label={borough} />
      </div>
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
