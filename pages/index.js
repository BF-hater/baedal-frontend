import {useEffect} from 'react';
import { Main, Top, Map , Input, Button, Section, Search, Select, Mapbox, H1, A} from '../components/Styles'


export default function Home(){
  
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.458342744008654, 126.69792535547877), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.458342744008654, 126.69792535547877); 

    // 마커를 생성합니다
    var marker = new window.kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null); 
  }, [])
  return(
    <>
      <Top>
      <p>
        <span>데이트 장소: </span>
        <Select>
            <option value="" disabled>데이트 장소를 선택해주세요.</option>
            <option value="서울시">서울시</option>
            <option value="경기도">경기도</option>
            <option value="인천">인천</option>
            <option value="충청도">충청도</option>
            <option value="제주도">제주도</option>
        </Select>
      </p>
      <A href="#">홈</A>
      <A href="#">코스 추천</A>
      <A href="#">지역 볼거리</A>
      <A style={{color:"white"}}>로그인</A>
        </Top>
        <Main>데이트 길잡이</Main>
        <Section>
          <Mapbox>
            <H1>기본위치</H1>
            <Map id="map"></Map>
          </Mapbox>
          <Search>
            <Input type="text" placeholder="데이트 장소를 검색하세요" /><Button>검색</Button>
          </Search>
        </Section>
    </>
  )
}


