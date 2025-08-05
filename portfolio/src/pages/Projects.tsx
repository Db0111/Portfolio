import { ExternalLink, Star } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "아인슈타임(2025.07 - ing)",
      image: "/Einstime.png",
      techStack: [
        "https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF",
        "https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=FFFFFF",
        "https://img.shields.io/badge/Emotion-DB7093.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF",
        "https://img.shields.io/badge/Webpack-8DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=white",
      ],
      features: [
        "모임 생성 → 링크 공유 → 사용자 일정 수집 → 가능한 시간 계산까지 전 과정을 최소한의 클릭으로 처리하는 일정 조율 서비스",
        "디자인 시스템 기반의 재사용 컴포넌트 설계와 Webpack 환경 설정을 직접 구성하여 프론트엔드 개발의 일관성과 확장성 확보",
        "CI/CD 파이프라인을 Github Actions + AWS CodePipeline으로 구축해, 코드 푸시 후 자동 빌드 및 배포까지 자동화",
      ],
      links: [
        {
          type: "website",
          url: "https://estime.today",
          badge:
            "https://img.shields.io/badge/Website-181717.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF",
        },
        {
          type: "github",
          url: "https://github.com/woowacourse-teams/2025-estime",
          badge:
            "https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff",
        },
      ],
    },
    {
      title: "QuizGen (2024.08-2024.11)",
      image: "/Quizgen.png",
      techStack: [
        "https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF",
        "https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=FFFFFF",
        "https://img.shields.io/badge/Tailwind-1daabb.svg?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF",
      ],
      features: [
        "내가 정리한 PDF를 업로드하여 시험 문제를 만들어볼 수 있는 서비스",
        "React Context를 활용하여 전역적으로 상태를 관리하고, 클라이언트의 한 번의 요청으로 서버로부터 데이터를 지속적으로 받아오기 위해 SSE(Server-Sent Events)를 사용하였습니다.",
      ],
      links: [
        {
          type: "website",
          url: "https://quizgen.site",
          badge:
            "https://img.shields.io/badge/Website-181717.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF",
        },
        {
          type: "github",
          url: "https://github.com/August-ToyProject/PDF-Quiz",
          badge:
            "https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff",
        },
      ],
    },

    {
      title: "Portfolio (2024.09-)",
      image: "/Portfolio.png",
      techStack: [
        "https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF",
        "https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=FFFFFF",
      ],
      features: ["저의 포트폴리오입니다."],
      links: [
        {
          type: "website",
          url: "https://deokbin.vercel.app",
          badge:
            "https://img.shields.io/badge/Website-181717.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF",
        },
        {
          type: "github",
          url: "https://github.com/Db0111/Portfolio",
          badge:
            "https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff",
        },
      ],
    },
    {
      title: "Diary (2024.06)",
      image: "/Diary.png",
      techStack: [
        "https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232A",
        "https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/Styled%20Components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=FFFFFF",
      ],
      features: [
        "오늘의 하루를 기록할 수 있는 일기장 서비스",
        "달력에서 이번 달의 일기를 모두 불러올 수 있으며, 일기를 작성, 조회, 삭제할 수 있습니다",
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/Db0111/Diary",
          badge:
            "https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff",
        },
      ],
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>.
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>

                  <div className="project-tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={tech}
                        alt="Tech stack"
                        className="tech-badge"
                      />
                    ))}
                  </div>

                  <div className="project-description-section">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="project-feature">
                        <Star className="project-feature-icon" />
                        <p className="project-feature-text">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <img
                          src={link.badge}
                          alt={link.type}
                          className="project-link-badge"
                        />
                        <span className="project-link-url">{link.url}</span>
                        <ExternalLink
                          size={16}
                          style={{ marginLeft: "auto", color: "#6b7280" }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
