import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
// 이 패턴은 css module인데 우리로 하여금 평범한 css를 사용하게 해준다.

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? styles.active : ""}>
          About
        </a>
      </Link>
    </nav>
  );
}

// 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적는다. styles.nav 이런식으로
// 이것은 장점이 다른 컴포넌트에서도 nav라는 클래스 이름을 사용하도록 가능하게 만든다.
// 그래서 클래스 이름 중복 고민없이 재사용 가능하다. => Next가 클래스이름을 무작위로 바꿔줄것이다
