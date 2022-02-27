import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <h1>hello {counter}</h1>
      <button onClick={handleClick}>plus</button>
    </div>
  );
}

// Static Pre Rendering

// create react app => 클라이언트 사이드 렌더로 앱을 만든다.
// 이것은 너의 브라우저가 유저가 보는 UI를 만드는것을 의미한다.
// 그래서 소스코드를 보면 하나의 div 밖에 들어있지 않다.
// 브라우저가 HTML을 가져올 때 비어있는 div로 가져온다.
// 브라우저는 JS코드가 왔을 때만 UI를 만든다.
// 만약 js코드를 가져오기전까지 흰화면만 보인다면 그건 좋지않다.

// 반면 next js에 소스코드를 보면 실제 HTML 코드를 볼 수 있다.
// 그래서 유저가 매우 느린연결을 하거나 자바스크립트 비활성화가 되어있어도 적어도 HTML을 볼 수 있다.
// next js에 의해서 pre rendering 되는 것이다.
// next js는 리액트js를 백엔드에서 동작시켜서 이 페이지를 미리 만든다.
// next js는 그 HTML을 페이지의 소스코드에 넣어준다.

// next Js로 만들면 유저들이 너의 웹사이트에 가면 이미 무언가 있기 때문에 SEO에도 좋다.
