import React from 'react';
import tutor from '../assets/main_tutor.jpg';
import FullScreenImageWithAnimatedText from '../components/FullScreenImageWithAnimatedText';

const Main = () => {

  const textArray = [
    {
      title: "소개",
      content: "캐나다 캘거리에 있는 기독교 홈스쿨 가정과 연계하여 한국인 초중고, 대학생들이 홈스테이를 하며 다양한 문화체험, 인성교육, 사회성 향상, 그리고 24시간 영어를 사용함으로 효과적인 영어 실력의 향상을 기대할 수 있습니다. 캐나다 현지 한국인 가정이 이를 위해 학생에 맞는 적절한 가정을 배치하며 공항픽업 및 학생이 홈스테이를 마치는 기간까지 잘 적응할 수 있도록 돕습니다."
    },
    {
      title: "CHH",
      content: "운영자 두 가정은 12년간의 캐나다 홈스쿨 경험과 현지 크리스천 학교 그리고 자녀들의 대학 교육(UBC, 캘거리 대학)의 경험을 바탕으로 현지 캐내디언 홈스쿨 가정의 엄격한 선별과 학생 배정 등 체계적인 관리를 제공합니다. 캐나다 홈스쿨 가정에 연결해주는 일부 기업들과 다른 점은 인근에서 한국인 가정들(CHH 운영자 가정)이 학생이 잘 적응할 수 있도록 도우며 부모님과 필요 시 자유롭게 커뮤니티를 갖는다는 장점이 있습니다.",
    },
  ];

  return (
    <div>
    <FullScreenImageWithAnimatedText
      src={tutor}
      alt="Background Image"
      imageOpacity={50}
      textData={textArray}
      textBoxOpacity={40}
      animationDirection="left"
    />
    </div>
    
  );
}

export default Main;