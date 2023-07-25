import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;

  img {
    width: 107px;
    height: 124px;
  }

  p {
    text-align: center;
    margin-top: 2.4rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.6rem;
    letter-spacing: -1.2%;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    margin-top: 2.4rem;
    padding: 1.6rem 2.4rem;
    border: 0;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.containerBackground};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 2.4rem;
    cursor: pointer;
  }
`;

export default function LogIn() {
  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <Container>
      <img
        src={isDarkMode ? '/images/no-image-dark.png' : '/images/no-image.png'}
        alt="require login"
      />
      <p>
        로그인을 하시면
        <br />
        스크랩 하실 수 있어요!
      </p>
      <button type="button">로그인하기</button>
    </Container>
  );
}
