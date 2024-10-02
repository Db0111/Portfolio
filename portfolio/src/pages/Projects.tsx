import "animate.css";
import "./Projects.css";
import { BsBalloonFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="animate__animated animate__flipInX card">
        <h2>Diary (2024.06)</h2>
        <div className="stack">
          <img src="https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232A" />
          <img src="https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/Styled%20Components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=FFFFFF" />
        </div>
        <div className="project_title">
          <BsBalloonFill style={{ width: "20px", height: "20px" }} />
          <div>오늘의 하루를 기록할 수 있는 일기장 서비스</div>
        </div>
        <div className="project_description">
          <BsBalloonFill style={{ width: "20px", height: "20px" }} />
          <div>
            달력에서 이번 달의 일기를 모두 불러올 수 있으며, 일기를 작성, 조회,
            삭제할 수 있습니다
          </div>
        </div>
        <div className="site">
          <div className="link">
            <img src="https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff" />
            <a
              href="https://github.com/Db0111/Diary"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Db0111/Diary
            </a>
          </div>
        </div>

        <div></div>
      </div>

      <div className="animate__animated animate__flipInX card">
        <h2>BookGPT (2024.07-2024.08)</h2>
        <div className="stack">
          <img src="https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF" />

          <img src="https://img.shields.io/badge/React%20Native-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />
        </div>
        <div className="project_title">
          <BsBalloonFill style={{ width: "20px", height: "20px" }} />
          <div>사용자가 선택한 옵션을 바탕으로 책을 추천해주는 서비스</div>
        </div>
        <div className="project_description">
          <BsBalloonFill style={{ width: "20px", height: "20px" }} />
          <div>
            사용자가 읽고 싶은 책에 대한 옵션(분야 등)을 선택하면 GPT 에
            전달하여 책을 추천받고 카카오 북 API 를 통해 책 이미지를 불러올 수
            있도록 하였습니다. 또한, 기기에 AsyncStorage를 통해 데이터를
            저장하여 나중에 다시 접속하였을 때도 저장된 책을 불러올 수 있도록
            하였습니다
          </div>
        </div>

        <div className="site">
          <div className="link">
            <img src="https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff" />
            <a
              href="https://github.com/Db0111/BookGPT"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Db0111/BookGPT
            </a>
          </div>
        </div>
      </div>

      <div className="animate__animated animate__flipInX card">
        <h2>QuizGen (2024.08-)</h2>
        <div className="stack">
          <img src="https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/Tailwind-1daabb.svg?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=FFFFFF" />
        </div>
        <div className="project_title">
          <BsBalloonFill style={{ width: "20px", height: "20px" }} />
          <div>
            내가 정리한 PDF를 업로드 하여 시험 문제를 만들어볼 수 있는 서비스
          </div>
        </div>
        <div className="project_description">
          <BsBalloonFill style={{ width: "20px", height: "20px" }} />
          <div>
            React Context를 활용하여 전역적으로 상태를 관리하고, 클라이언트의 한
            번의 요청으로 서버로부터 데이터를 지속적으로 받아오기 위해
            SSE(Server-Sent Events)를 사용하였습니다.
          </div>
        </div>

        <div className="site">
          <div className="link">
            <img src="https://img.shields.io/badge/Website-181717.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF" />
            <a
              href="https://quizgen.site"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://quizgen.site
            </a>
          </div>
          <div className="link">
            <img src="https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff" />
            <a
              href="https://github.com/August-ToyProject/PDF-Quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/August-ToyProject/PDF-Quiz
            </a>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__flipInX card">
        <h2>Portfolio (2024.09-)</h2>
        <div className="stack">
          <img src="https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=FFFFFF" />
          <img src="https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=FFFFFF" />
        </div>
        <div className="project_title">
          <BsBalloonFill style={{ width: "20px", height: "20px" }} />
          <div>저의 포트폴리오입니다.</div>
        </div>
        <div className="site">
          <div className="link">
            <img src="https://img.shields.io/badge/Website-181717.svg?style=for-the-badge&logo=emotion&logoColor=FFFFFF" />
            <a
              href="https://deokbin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://deokbin.vercel.app
            </a>
          </div>
          <div className="link">
            <img src="https://img.shields.io/badge/Github-181717.svg?style=for-the-badge&logo=github&logoColor=ffffff" />
            <a
              href="https://github.com/Db0111/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Db0111/Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
