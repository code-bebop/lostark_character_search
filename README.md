# 로스트아크 캐릭터 검색 웹 앱
한동안 프론트엔드 토이 프로젝트를 진행하지 않고 있다가 배웠던 것을 다 까먹어버릴 것만 같아 이 프로젝트를 진행했다.
빌드 도구로 webpack 대신 vite라는 라이브러리가 나왔다는데 그걸 한 번 써보고 싶었고, node.js 에서 웹크롤링을 하는 방법을 배워왔기 때문에 그것도 사용해보고 싶었다.
그래서 이전에 만드려다가 포기한 아이템인 "로스트아크 캐릭터 검색" 프로젝트를 진행했다. 왜냐하면 로스트아크는 API를 지원하지 않기 때문이고, 이전에는 내가 웹크롤링에 대한 지식이 전무했기 때문이다.

## 디자인
https://www.figma.com/file/Bo00fKXouaqKxNRHxpD4Vf/Lostark-API?node-id=0%3A1

## 주로 사용된 기술
### Figma
웹 사이트를 만드려면 웹 디자인은 무조건 필요하다. 특히 팀을 이루어서 만드는 것이라면 더더욱 필요할 것이다.
React로 처음 웹 프로젝트를 진행했을 때부터 Figma는 사용해왔지만, "제대로" 사용했는가 하면 그렇지가 않다.
예전에는 그냥 디자인을 그려놓고 따라만들기만 했다.
그러나 지금은 Figma의 "Component" 기능을 적극적으로 사용해 디자인 수정이 용이하게 했고, "interaction" 기능도 사용해서 Figma 자체에서 Present 했을 때 웹 사이트가 어떻게 동작하는지 확실하게 알아볼 수 있게 했다.
또한 Text Style, Color Style을 디자인 시스템으로 만들어 알아보기에도 쉽고 사용하기도 쉽게 했다.

Figma를 거듭 사용하면서 자연스레 깨달은 것은, **Figma에서 제대로 웹 디자인을 해 놓아야 코드로 구현할 때에 편해진다는 것**이다.
예를 들면 "Component" 기능은 '이 부분을 컴포넌트로 분리해야 한다.' 는 것을 알려준다. "interaction" 기능은 SPA에서 Route를 나눌 때의 단서를 알려주며, 어디에 Link 컴포넌트가 위치해야할지 알려준다. 디자인 시스템은 그대로 코드로 옮겨서 적용이 가능하다. 또한 Frame이나 Component의 Naming을 Figma에서 잘 해놓으면 구현할 때에 적어도 컴포넌트명으로 고민하는 시간은 훨씬 줄어든다. 더 자세한 사용례는 아래에서 소개하겠다.

그래서 이번에는 같이 프로젝트를 진행하는 팀원이 있다고 생각하고 Figma 웹 디자인부터 힘 주고 만들었다.

### react-query
react-query는 "global state" 없이 fetch, cache, update가 가능한 라이브러리다.
이전 프로젝트까지만 해도 redux, redux-saga를 덕지덕지 붙여가면서 데이터 관리를 했었지만, 이번 프로젝트에서 redux는 필요하지도 않았다.

아래는 API를 요청하는 react-query 코드이다.
```ts
type ProfileQueryUrl  =
	| "equipment"
	| "avatar"
	| "jewel"
	| "card"
	| "skill"
	| "info"
	| "another";

  

const getProfile = async <ResponseT>(
	url: ProfileQueryUrl,
	nickname: string
) => {
	const { data } =  await axios.get<ResponseT>(
		`https://codebebop.xyz/lostark/profile/${url}?nickname=${nickname}`
	);
  
	return data;
};

  

const useProfileQuery = <ResponseT>(url: ProfileQueryUrl, nickname: string) => {
	return useQuery<ResponseT, AxiosError>(
		[url, nickname],
		() => getProfile<ResponseT>(url, nickname),
		{
			enabled: !!nickname,
			staleTime: 1000 * 60,
			cacheTime: Infinity,
		}
	);
};
```

어느 페이지에 진입해도 react-query 요청을 보내야 하기 때문에 이것을 `useProfileQuery` 라는 커스텀 훅으로 분리했다.  해당하는 요청 API와 캐릭터 이름을 각각 파라미터로 받아와 react-query의 `useQuery`를 이용해 요청한다.
`staleTime`은 6분으로 설정하여 6분이 지나면 재요청하게 설정했고, `cahceTime`은 `Infinity`로 설정하여 받아온 데이터는 재요청하기 전까지는 계속 cache하게 했다. 또한 nickname이 없다면 query를 실행할 이유가 없으니 `enable`으로  `!!nickname`을 주었다.
`url`혹은   `nickname`이 바뀌면 다른 데이터를 요청하는 것이기 때문에 `query key`로 `[url, nickname]`을 주었다.

그리고 탭 메뉴를 눌러 페이지를 이동하면 해당 탭 메뉴에 해당하는 `url`으로  `useProfileQuery`을 호출하여 데이터를 받아온다. (예를 들어 카드 탭 메뉴를 누르면 `useProfileQuery("card", nickname)`을 호출한다.)
그런데 이렇게 하니 탭 메뉴를 눌러 캐릭터의 캐싱되지 않은 다른 정보를 보려고 할 때 마다 0.5초 정도의 로딩이 생기고, 화면이 깜빡이게 되니 UX가 확 떨어지는 것이다. 
그래서 떠올린 방법이 최상위 라우트에서 모든 url에 요청을 보내어 사용자가 다른 정보를 보려고 할 때 캐싱한 데이터를 보여줌으로써 로딩을 없애는 것이다.

```ts
const useAllProfileCache = (nickname: string) => {
	useProfileQuery<EquipmentResponse>("equipment", nickname);
	useProfileQuery<AvatarResponse>("avatar", nickname);
	useProfileQuery<JewelResponse>("jewel", nickname);
	useProfileQuery<CardResponse>("card", nickname);
	useProfileQuery<SkillResponse>("skill", nickname);
	useProfileQuery<InfoResponse>("info", nickname);
	useProfileQuery<AnotherResponse>("another", nickname);
};
```
이 함수를 최상위 라우트에서 호출하여 문제를 해결했다.

단지 `useQuery` 만으로 해결된 문제는 
1. 전역 로컬 상태와 전역 원격 상태의 분리
2. 전역 원격 상태의 캐싱
3. 그 외 옵션을 통한 디테일한 설정 (데이터 반복 요청, 반복 요청 주기, 요청 조건 등..)

이다. redux와 redux-saga로 API 통신과 응답 데이터까지 관리하던 것을 생각하면 굉장히 쾌적하다.

### useContext, useReducer
웹을 만들다 보면 전역 상태를 사용하는 것은 불가피하다. prop drilling에 시달리며 state를 어디에 두어 관리해야 할지 하루종일 고민할 게 아니라면 말이다.

이전에는 `react-redux`같은 상태 관리 도구 라이브러리를 사용했지만, 나는 그냥 string type의 값 하나만 전역 상태로 두면 되었기에 상태 관리 라이브러리를 받는 것은 닭 잡는 데 소 잡는 칼을 쓰는 격이다.

이럴 때 사용할 수 있는 게 useContext와 useReducer의 조합이다.
간단히 이야기하자면 useReducer로 만든 store와 dispatcher를 context를 사용해 코드 전역에 provide 하는 것이다.

이 프로젝트에서는 사용자가 입력한 nickname을 전역 상태로 관리해야 했고, `./context/nickname.tsx`에서 `nicknameStateContext`와 `nicknameDispatchContext`를 export하여 어느 컴포넌트에서든 nickname에 접근 및 수정이 가능하게 했다.

이에 관련한 내용은 [내 Velog](https://velog.io/@code-bebop/useReducer%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)에 자세히 정리해놓았다.

### gh-pages
이 프로젝트는 `gh-pages`를 사용해서 배포했다.
이전 프로젝트들도 `gh-pages`를 사용했지만, 이번에 사용해보니 훨씬 사용하기 좋게 바뀌어있었다.

무엇이 바뀌었냐면 repository - setting - pages 에서 gh-pages를 컨트롤 할 수 있게 되었다.
로컬에서 프로젝트를 build하고 나서 gh-pages의 cli 명령어를 실행하여 build 폴더를 임의의 branch에 올린다. 그 후 pages 메뉴에서 gh-pages 링크에 게시할 branch (build 폴더가 있는 branch) 를 선택하여 Save 하기만 하면 배포 완료다.

- HashRouter에 관한 내용 추가 필요

### 디자인 시스템
이번 프로젝트에서는 늘 중구난방이었던 `styled-components` 코드를 잘 정리하고 싶었다.
정리해야 할 수 있는 여지는 많았다. css 속성을 나열할 때의 순서를 정할 수도 있고, `storybook` 라이브러리를 이용할 수도 있다.
그러나 이번 프로젝트에는 `styled-components`의 `theme` 기능을 이용한 디자인 시스템을 적용했다.

```ts
const mainTheme = {
	color: {
		black: "#202020",
		white: "#F0F0F0",
		default: "#020028",
		sub:"#2D81FF",
		disable: "#A6A2A2",
		rarity: {
			common: "#FFFFFF",
			uncommon: "#8DF901",
			rare: "#00B0FA",
			epic: "#BF07C2",
			legendary: "#F97629",
			artifact: "#FA5D00",
			ancient: "#E3C7A1",
			esther: "#3CF2E6",
		},
		skeleton: {
			content: "#272535",
			background: "#100f2a",
		},
	},
	font: {
		lead_24px: "bold 24px IBMPlexSansKR-Regular",
		lead: "bold 20px IBMPlexSansKR-Regular",
		body: "500 16px IBMPlexSansKR-Regular",
		body_14px: "500 14px IBMPlexSansKR-Regular",
	},
};

export type MainTheme = typeof mainTheme;

export default { mainTheme };
```

figma에서 만든 스타일 가이드를 기반으로 위와 같이 key-value 형식으로 css 코드를 정리한다.

```jsx
import { ThemeProvider } from "styled-components";
import mainTheme from "./mainTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
			<ThemeProvider  theme={mainTheme}>
				<React.StrictMode>
					<Router  />
				</React.StrictMode>
			</ThemeProvider>
);
```

그리고 최상위 컴포넌트를 `ThemeProvider`로 감싸주고,  `theme` prop으로 작성했던 theme를 넘겨준다.

마지막으로 `./styled-componenets.d.ts` 파일을 만들어서 그 안에 아래와 같이 코드를 작성하면 준비는 끝난다.

```ts
import "styled-components";
import { MainTheme } from "./mainTheme";

declare module "styled-components" {
	export interface DefaultTheme {
		mainTheme: MainTheme;
	}
}
```
이것은 `styled-components`의 타입 정의 파일에 내가 만든 theme의 타입 정의를 덧붙이는 것으로, 내 theme를 불러올 때에 타입 정의 파일에 의해 자동완성이 지원되므로 코드를 사용하는 것이 굉장히 편해진다.


```ts
const Background = styled.div`
	width: 1080px;
	min-height: 1000px;
	padding-bottom: 70px;
	margin: auto;
	background-color: ${({ theme }) => theme.mainTheme.color.default};
`;
```
그리고 `styled-components` 코드를 작성할 때 위와 같이 사용하기만 하면 된다.

이렇게 동일한 의미로 반복되어 사용되는 코드를 변수화하여 사용하면, 이후 디자인을 수정하는 일이 있어도 쉽게 수정사항을 적용 가능하다.

이렇게 웹디자인 - 웹구현 간에 스타일 가이드가 긴밀하게 연계되어 사용되는 것 또한 웹디자인에서부터 신경을 써주어야 하는 이유이다.

### 웹 크롤링(node.js)
이전에 웹 크롤링에 대해 찾아봤을 때는 java 혹은 python 으로 된 예제만 보여 지레 겁먹고 더 찾을 생각을 하지 못 했다. 그리나 이번에는 node.js로 웹 크롤링을 할 수 있게 해주는 cheerio 라이브러리를 알게 되어 프로젝트에 적용했다.

API 코드는 [lostark-API repository](https://github.com/code-bebop/lostark-API)에서 확인할 수있다.

## 아쉬운 점
### 디자인!
항상 아쉬운 것은 디자인이다. 당초에 기획한 디자인은 사이버펑크 풍의 디자인이었다. 밝은 파란색과 보라색, 분홍색 계열의 메인 컬러에 어두운 배경, 네온 이펙트 등을 섞고 배경은 슈테른의 야경으로 할 생각이었다.
그런데 이 색 조합을 사용한 웹 디자인은 촌스러워지기 십상이다. 특히 네온 이펙트는 더더욱 그렇다. 특히 정보를 전달해야해서 컴포넌트가 많은 웹에선 더욱 그렇고.
그래서 이런 저런 레퍼런스를 참고해서 디자인을 완성했다.

원하는 디자인을 만족할 만큼의 품질로 완성시킬 수 있었으면 싶었다. 하지만 언제까지고 이 프로젝트의 웹 디자인만 만지작 거릴 순 없으니 레퍼런스를 참고해서 완성했다.


### 디자인 레퍼런스
[MGX 게임 데이터 플랫폼](https://www.mgx.kr/lostark/character/?character_name=%EB%AA%A8%EC%BD%94%EC%BD%94%EB%B3%BC%EB%94%B0%EA%B5%AC%EB%B9%A0%EB%8A%94%EC%86%8C%EB%A6%AC)
[로스트아크 전투정보실](https://lostark.game.onstove.com/Profile/Character/%EB%AA%A8%EC%BD%94%EC%BD%94%EB%B3%BC%EB%94%B0%EA%B5%AC%EB%B9%A0%EB%8A%94%EC%86%8C%EB%A6%AC)
[DUNDAM](https://dundam.xyz/view?image=8ae57807390e0cabfd74ab49c60c77bc&server=diregie&name=%EC%8B%9C%EC%98%A8%EC%9D%B4%EB%84%A4%EA%B2%80%EC%8B%A0)
