import { Body, Subtitle, Title } from "../shared/StyledComponents/StyledText";
import "./TitleBlock.scss";

export default function TitleBlock() {
  // title text
  // title subtext
  // preamble

  return (
    <section className="title-block">
      <div className="title-block__box">
        <Title>Empty Homes</Title>
        <Subtitle>How do they affect us and our communities?</Subtitle>
      </div>
      <Body>
        The following work has been pulled together by the Empty Homes Action
        Group to understand the affect of vacant homes on our communities and on
        the way we live our lives.{" "}
      </Body>
    </section>
  );
}
