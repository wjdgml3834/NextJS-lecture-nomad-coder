import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}

// a태그를 쓰면 전체 페이지를 새로고침하기에 의미가 없어진다. => 느리다.
// useRouter는 일종의 훅인데 next에서 기본적으로 제공한다.
// console.log(router) 해보면 우리 현재 location에 관한 정보들을 알 수 있다.
// 잘은 모르겟지만, router.pathname은 url경로와 관련된 함수인거같다.
