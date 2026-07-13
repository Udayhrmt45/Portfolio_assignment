import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 3rem;
  max-width: 600px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  min-width: 150px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1.1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <Title>Get In Touch</Title>
      <Subtitle>
        I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out through any of the channels below!
      </Subtitle>

      <LinksContainer>
        <SocialLink href="https://www.linkedin.com/in/uday-hiremath-45ln" target="_blank" rel="noopener noreferrer">
          Linkedin
        </SocialLink>

        <SocialLink href="https://github.com/Udayhrmt45" target="_blank" rel="noopener noreferrer">
          Github
        </SocialLink>

        <SocialLink href="https://drive.google.com/file/d/1wrbu9GyftdodyKr2KGh2JZOdz0nwggQG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume
        </SocialLink>

        <SocialLink href="mailto:udayhiremath45@gmail.com">
          Mail
        </SocialLink>
      </LinksContainer>
    </PageContainer>
  );
};

export default Contact;
