import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  line-height: 1.5;
  flex: 1;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Projects = () => {
  return (
    <PageContainer>
      <Title>My Projects</Title>
      <Grid>
        {/* Duplicate ProjectCard to add more projects */}
        <ProjectCard>
          <ProjectTitle>SmartCredit</ProjectTitle>
          <ProjectDescription>
            SmartCredit is a full-stack, microservice-based web application that uses Machine Learning to predict an applicant's credit risk score and automate the loan approval process. It helps financial institutions assess the likelihood of loan repayment using intelligent, data-driven insights.
          </ProjectDescription>
          <TechStackContainer>
            <TechTag>Java</TechTag>
            <TechTag>React</TechTag>
            <TechTag>Python</TechTag>
            <TechTag>Spring Boot</TechTag>
          </TechStackContainer>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>MetaMint</ProjectTitle>
          <ProjectDescription>
            A full-stack decentralized NFT marketplace built with Next.js, Solidity, Hardhat, and IPFS (via Pinata). Users can mint, list, view, and buy NFTs with full support for image, video, and audio media types. Features include Metamask authentication, media watermarking, and filtering by media type.
          </ProjectDescription>
          <TechStackContainer>
            <TechTag>Solidity</TechTag>
            <TechTag>Hardhat</TechTag>
            <TechTag>Ether.js</TechTag>
            <TechTag>Next.js</TechTag>
          </TechStackContainer>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>HealthEd AI</ProjectTitle>
          <ProjectDescription>
            An AI-driven medical assistant leveraging ClinicalBERT and the MedQuAD dataset to trans- late complex medical terminology into patient-friendly explanations.
          </ProjectDescription>
          <TechStackContainer>
            <TechTag>Python</TechTag>
            <TechTag>Flask</TechTag>
            <TechTag>React.js</TechTag>
            <TechTag>BERT</TechTag>
          </TechStackContainer>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>LangLearn</ProjectTitle>
          <ProjectDescription>
            An interactive MERN stack language learning platform with JWT authentication, real-time video calling & messaging via Stream API, TanStack-powered data fetching, and a secure, responsive UI for seamless communication and learning.
          </ProjectDescription>
          <TechStackContainer>
            <TechTag>JavaScript</TechTag>
            <TechTag>React.js</TechTag>
            <TechTag>Node.js</TechTag>
            <TechTag>MongoDB</TechTag>
          </TechStackContainer>
        </ProjectCard>
      </Grid>
    </PageContainer>
  );
};

export default Projects;
