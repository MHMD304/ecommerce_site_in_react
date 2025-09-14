import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HeroContainer>
      <HeroTitle>Welcome to Our Store</HeroTitle>
      <HeroText>
        Discover the best products at amazing prices. Browse our categories and
        find what you need!
      </HeroText>
      <HeroButton onClick={() => navigate("/products")}>Shop Now</HeroButton>
    </HeroContainer>
  );
};

export default Home;

const HeroContainer = styled.div`
  height: 80vh;
  background: linear-gradient(135deg, #232f3e 0%, #2575fc 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  max-width: 600px;
`;

const HeroButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: #ffce00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
