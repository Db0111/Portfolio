import "animate.css";
import "./MainPage.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Main = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.9,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView1) {
      const element = document.querySelector(".main_container");
      if (element) {
        element.classList.add("animate__flipInX");
      }
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      const element = document.querySelector(".main_container2");
      if (element) {
        element.classList.add("animate__flipInX");
      }
    }
  }, [inView2]);

  return (
    <>
      <div className="main_container" ref={ref1}>
        <h1
          className={`animate__animated ${inView1 ? "animate__flipInX" : ""}`}
        >
          Kim
        </h1>
        <h1
          className={`animate__animated ${inView1 ? "animate__flipInX" : ""}`}
        >
          Deokbin
        </h1>
        <h2
          className={`animate__animated ${inView1 ? "animate__flipInX" : ""}`}
        >
          Frontend-Developer
        </h2>
      </div>

      <div className="main_container2" ref={ref2}>
        {inView2 && (
          <div>
            <h1 className="animate__animated animate__fadeInLeft">
              "행정학과에서 개발자로"
            </h1>
            <h2 className="animate__animated animate__fadeInLeft">
              저는 새로운 것을 배우는 데서 큰 즐거움을 느낍니다. QA 업무를 통해
              개발팀 옆에서 처음으로 코드를 읽어보려고 노력했던 순간 이후로,
              개발에 흥미를 붙이게 되었습니다. 공부하는 과정에서 만나는 문제들은
              저에게 장애물이 아니라 새로운 도전으로 다가왔습니다.
            </h2>
            <h2 className="animate__animated animate__fadeInLeft">
              프론트엔드 개발에 발을 들이면서, 매 순간 더 나아가고자 하는
              열정으로 코드를 작성하고, 완벽한 사용자 경험을 만들어내고
              싶습니다. 한 번 시작하면 쉽게 포기하지 않으며, 언제나 배움을 통해
              성장하고자 하는 제 자신이 가장 큰 원동력입니다.
            </h2>
          </div>
        )}
      </div>
    </>
  );
};
export default Main;
