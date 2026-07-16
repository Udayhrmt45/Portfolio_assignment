import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const ShortDescription = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  max-width: 800px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CategoryTitle = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 0.5rem;
`;

const SkillBadge = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const EduCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-left: 4px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 800px;
`;

const EduTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const EduDetail = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin: 0;
`;

const EduHighlight = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const About = () => {
  return (
    <PageContainer>
      <Section>
        <Title>About Me</Title>
        <ShortDescription>Full-stack developer building real-world web applications and scalable solutions.</ShortDescription>
        <Content>
          I am a passionate full-stack developer who enjoys building real-world web applications. I work with technologies like Java, JavaScript, React, Node.js, and Python to create scalable and user-friendly products. I am always eager to learn new tools and improve my skills in web development, cloud, and Web3 while creating solutions that solve real problems.
        </Content>
      </Section>

      <Section>
        <Title>Education</Title>
        <EduCard>
          <EduTitle>RV Institute of Technology and Management</EduTitle>
          <EduDetail>Bachelor of Engineering</EduDetail>
          <EduDetail>Branch: <EduHighlight>Information Science and Engineering</EduHighlight></EduDetail>
          <EduDetail>CGPA: <EduHighlight>8.53</EduHighlight></EduDetail>
        </EduCard>
      </Section>

      <Section>
        <Title>Skills</Title>
        <SkillsContainer>
          <SkillCategory>
            <CategoryTitle>Languages</CategoryTitle>
            <SkillsGrid>
              <SkillBadge>JavaScript</SkillBadge>
              <SkillBadge>Python</SkillBadge>
              <SkillBadge>Java</SkillBadge>
              <SkillBadge>SQL</SkillBadge>
            </SkillsGrid>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Frontend</CategoryTitle>
            <SkillsGrid>
              <SkillBadge>React</SkillBadge>
              <SkillBadge>HTML5 & CSS3</SkillBadge>
            </SkillsGrid>
          </SkillCategory>
          <SkillCategory>
            <CategoryTitle>Backend</CategoryTitle>
            <SkillsGrid>
              <SkillBadge>Node.js</SkillBadge>
              <SkillBadge>Express</SkillBadge>
            </SkillsGrid>
          </SkillCategory>
        </SkillsContainer>
      </Section>
    </PageContainer>
  );
};

export default About;
