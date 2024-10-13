import Typography from "@mui/material/Typography";
import "./TitleBlock.scss";

export default function TitleBlock() {
  // title text
  // title subtext
  // preamble

  return (
    <section className="title-block">
      <div className="title-block__box">
        <Typography variant="h1">Empty Homes</Typography>
        <Typography variant="h2">
          How do they affect us and our communities?
        </Typography>
      </div>
      <Typography variant="body1">
        The following work has been pulled together by the Empty Homes Action
        Group to understand the affect of vacant homes on our communities and on
        the way we live our lives.{" "}
      </Typography>
    </section>
  );
}
