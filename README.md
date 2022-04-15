# [내일의 집](https://kimdong-hun.github.io/UI-Development-BootCamp/) (오늘의 집 스토어페이지 UI 클론코딩)

## 경험한 것

1. 반응형 웹을 구현하기 위해 CSS Media Query를 사용 (모바일, 태블릿, 데스크탑)
2. 반복되는 코드를 줄이고 수정을 쉽게 하기 위해 SCSS 사용 (반응형, 컬러, 폰트, 버튼 등)
3. 시맨틱 마크업으로 의미를 잘 전달하도록 문서를 작성 (header, main, footer, article, section)
4. 장애를 가진 사용자가 웹 콘텐츠에 더 쉽게 접근할 수 있도록 웹 접근성 고려 (스크린 리더, ARIA)

goormedu(구름에듀) - [김버그의 UI 개발 부트캠프](https://edu.goorm.io/lecture/25681/%EA%B9%80%EB%B2%84%EA%B7%B8%EC%9D%98-ui-%EA%B0%9C%EB%B0%9C-%EB%B6%80%ED%8A%B8%EC%BA%A0%ED%94%84-%EA%B2%BD%EB%A0%A5%EA%B0%99%EC%9D%80-%EC%8B%A0%EC%9E%85%EC%9C%BC%EB%A1%9C-%EB%A0%88%EB%B2%A8%EC%97%85)

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 한 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-default.jpg" alt="기본이미지" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인을 한 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-default.jpg" alt="기본이미지" />
    </div>
    <strong class="username">김동훈</strong>
  </a>
</div>
```
