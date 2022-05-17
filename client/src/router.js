const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    // 해당 path로 이동하면 view의 함수가 실행됨
    { path: "/", view: () => console.log("viewing Dashboard") },
    { path: "/posts", view: () => console.log("viewing Posts") },
    { path: "/settings", view: () => console.log("viewing Settings") },
  ];

  // url이 일치하는지 검사하여 일치하는 경로를 반환
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // 일치하는 경로가 없다면 기본경로로 설정
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
};

export default function routerInit() {
  // 뒤로가기 및 앞으로가기 구현
  window.addEventListener("popstate", router);

  // navigateTo 함수를 기본값으로 하는 이벤트 위임
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    router();
  });
}
