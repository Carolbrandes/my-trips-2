import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e react avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJs, NextJS e Styled Components
    </S.Description>

    <S.Ilustration src="/img/hero-illustration.svg" alt="imagem" />
  </S.Wrapper>
)

export default Main
