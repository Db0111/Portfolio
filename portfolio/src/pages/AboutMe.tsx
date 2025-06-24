import "./AboutMe.css";
import "animate.css";
import MyPhoto from "../assets/MyPhoto.png";

const AboutMe = () => {
  return (
    <div className="container">
      {/* About Me */}
      <div className="animate__animated animate__fadeInUp AboutMe">
        <div>
          <h2>About me 🍅</h2>
          <div>김덕빈(Kim Deokbin)</div>
          <div>2001. 01. 11</div>
        </div>
      </div>
      {/* Education */}
      <div className="animate__animated animate__fadeInUp Education">
        <h2>Education & Career 🎓</h2>
        <div className="period">
          <h3>2025.2-2025.11</h3>
          <div>우아한 테크코스 7기</div>
        </div>
        <div className="period">
          <h3>2023.9-2024.5</h3>
          <div>(주)제로엑스플로우 Growth Marketer</div>
        </div>
        <div className="period">
          <h3>2020.3-2025.2</h3>
          <div>한양대학교 행정학과 재학 중</div>
        </div>
        <div className="period">
          <h3>2016.3-2019.2</h3>
          <div>고양외국어고등학교 졸업</div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInUp stack_container">
        <h2>Stack 📚</h2>
        <div className="stack1">
          <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
          <img src="https://img.shields.io/badge/CSS-1572B6.svg?style=for-the-badge&logo=css3&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232A" />
        </div>
        <div className="stack2">
          <img src="https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/React%20Native-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />
        </div>
        <div className="stack3">
          <img src="https://img.shields.io/badge/Styled%20Components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/Tailwind-1daabb.svg?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/Emotion-DB7093.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF" />
        </div>
        <div className="test">
          <img src="https://img.shields.io/badge/Cypress-69D3A7.svg?style=for-the-badge&logo=cypress&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=jest&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=storybook&logoColor=FFFFFF" />
        </div>
        <div className="stack4">
          <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=figma&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/Jira-0052CC.svg?style=for-the-badge&logo=jira&logoColor=FFFFFF" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
