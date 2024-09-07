import "./SectionHeader.scss";

type SectionHeaderProps = { header: string; subheader: string };

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="sectionheader">
      <h2 className="sectionheader__head sectionheader__head--sub">
        {props.subheader}
      </h2>
      <h2 className="sectionheader__head sectionheader__head--main">
        {props.header}
      </h2>
    </div>
  );
}
