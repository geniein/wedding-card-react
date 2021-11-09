import React, { FC, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
    Kakao: any;
    LeonSans: any;
    TweenMax: any;
    Power4: any;
    Hammer: any;
  }
}

interface Props{
  place:any
}

const Map:FC<Props> = ({place}) =>{
  const placeInfo = place;
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(placeInfo.LatLng[0], placeInfo.LatLng[1]),
      level: 5,           
    };
    const map = new window.kakao.maps.Map(container, options);
    
    let markerPosition = new window.kakao.maps.LatLng(
      placeInfo.LatLng[0],
      placeInfo.LatLng[1]
    );

    let marker = new window.kakao.maps.Marker(
      {
        position: markerPosition,        
      }    
    );

    marker.setMap(map);    

    let iwContent = `<div style="padding:5px;font-weight:bold;">${placeInfo.name}<br><a href="https://map.kakao.com/link/map/${placeInfo.name},${placeInfo.LatLng[0]},${placeInfo.LatLng[1]}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${placeInfo.name},${placeInfo.LatLng[0]},${placeInfo.LatLng[1]}" style="color:blue" target="_blank">길찾기</a></div>`,
    iwPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

    let infowindow = new window.kakao.maps.InfoWindow({
      position : iwPosition, 
      content : iwContent 
    });
  
    infowindow.open(map, marker); 
  };

  return <div id="map" style={{ width: "100%", height: "450px" }}></div>;
}

export default Map;

//GOOGLE MAP
// import React, { FC } from 'react';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { Badge } from 'reactstrap';

// interface Props{
//     init:any
// }
// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: ""
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)