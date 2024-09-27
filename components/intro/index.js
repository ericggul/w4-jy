import * as S from "./styles";

export default function Intro() {
  const repeatedText = new Array(35).fill("Hello World");

  return (
    <S.Container>
      {new Array(31).fill(0).map((_, i) => (
        <S.Col
          key={i}
          style={{
            // fontSize: `${(i - 5) * 0.1 + 1}vw`,
            fontSize: "2vw",
            // opacity: 1 - i * 0.1,
            lineHeight: `${Math.abs(-(Math.abs(i - 15) ** 1.8 * 0.01) + 0.5)}vw`,
          }}
        >
          {repeatedText.map((text, index) => (
            <S.Text key={index} index={index}>
              {text}
            </S.Text>
          ))}
        </S.Col>
      ))}
    </S.Container>
  );
}
