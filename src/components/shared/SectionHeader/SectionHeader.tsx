import { Typography } from "@mui/material";
import "./SectionHeader.scss";

type SectionHeaderProps = { header: string; subheader: string };

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="sectionheader">
      <Typography
        variant="h4"
        className="sectionheader__head sectionheader__head--sub"
      >
        {props.subheader}
      </Typography>
      <Typography
        variant="h3"
        className="sectionheader__head sectionheader__head--main"
      >
        {props.header}
      </Typography>
    </div>
  );
}
