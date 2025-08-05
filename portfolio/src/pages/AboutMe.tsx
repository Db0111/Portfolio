import "./AboutMe.css";

const aboutMeInfo = {
  name: "김덕빈(Kim Deokbin)",
  birth: "2001. 01. 11",
};

const education = [
  {
    period: "2025.02 - 2025.11",
    desc: "우아한 테크코스 7기 Frontend",
  },
  {
    period: "2023.09 - 2024.05",
    desc: "(주)제로엑스플로우 Growth Marketer",
  },
  {
    period: "2020.03 - 2025.02",
    desc: "한양대학교 행정학과 재학 중",
  },
  {
    period: "2016.03 - 2019.02",
    desc: "고양외국어고등학교 졸업",
  },
];

const stacks = [
  [
    "https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232A",
    "https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF",
    "https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB",
  ],
  [
    "https://img.shields.io/badge/Styled%20Components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=FFFFFF",
    "https://img.shields.io/badge/Tailwind-1daabb.svg?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF",
    "https://img.shields.io/badge/Emotion-DB7093.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF",
  ],
  [
    "https://img.shields.io/badge/Cypress-69D3A7.svg?style=for-the-badge&logo=cypress&logoColor=FFFFFF",
    "https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=jest&logoColor=FFFFFF",
    "https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=storybook&logoColor=FFFFFF",
  ],
  [
    "https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=FFFFFF",
    "https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=figma&logoColor=FFFFFF",
    "https://img.shields.io/badge/Jira-0052CC.svg?style=for-the-badge&logo=jira&logoColor=FFFFFF",
  ],
];

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <div className="aboutme-container">
        <div className="aboutme-header">
          <h2 className="aboutme-title">About Me</h2>
        </div>
        <div className="aboutme-grid">
          {/* About Card */}
          <div className="aboutme-card">
            <div className="aboutme-card-content">
              <h3 className="aboutme-card-title">🍅 소개</h3>
              <div className="aboutme-info">
                <div className="aboutme-name">{aboutMeInfo.name}</div>
                <div className="aboutme-birth">{aboutMeInfo.birth}</div>
              </div>
            </div>
          </div>
          {/* Education Card */}
          <div className="aboutme-card">
            <div className="aboutme-card-content">
              <h3 className="aboutme-card-title">🎓 Education & Career</h3>
              <div className="aboutme-education-list">
                {education.map((edu, idx) => (
                  <div className="aboutme-education-item" key={idx}>
                    <span className="aboutme-education-period">
                      {edu.period}
                    </span>
                    <span className="aboutme-education-desc">{edu.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Stack Card */}
          <div className="aboutme-card">
            <div className="aboutme-card-content">
              <h3 className="aboutme-card-title">📚 Stack</h3>
              <div className="aboutme-stack-list">
                {stacks.map((row, rowIdx) => (
                  <div className="aboutme-stack-row" key={rowIdx}>
                    {row.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt="stack"
                        className="aboutme-stack-badge"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
