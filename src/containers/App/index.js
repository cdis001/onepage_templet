import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="introduce_joyEdu">
        <h1>JOY EDU</h1>
        <div className="line" />
        <pre>
          '학습심리상담센터'와 '학습코칭학원'의 콜라보! 상담과 교육이 만나
          "행복한 마음 즐거운 공부" 의 솔루션을 제공합니다.
        </pre>
        <div className="curriculum_joyEdu">
          <h2>교육 과정</h2>
          <div className="curriculum_box_joyEdu">
            <div className="curriculum_content_joyEdu"></div>
            <div className="curriculum_content_joyEdu"></div>
            <div className="curriculum_content_joyEdu"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
