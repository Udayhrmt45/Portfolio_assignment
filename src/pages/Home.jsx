import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const Home = () => {
  return (
    <PageContainer>
      <Title>Hello, I'm Uday Hiremath</Title>
      <Subtitle>A Full Stack Web Developer</Subtitle>
      <Content>
        Welcome to my portfolio! I specialize in creating dynamic and responsive web applications using modern technologies. Explore my projects and feel free to reach out if you'd like to collaborate or learn more about my work.
      </Content>
    </PageContainer>
  );
};

export default Home;
