// 일반적인 types.ts라면 export를 해줘야하지만
// types.d.ts로 파일이름을 설정하면
// type decoration file이라고 설정되어
// 일일히 필요한 부분에서 import 하지않아도 사용할 수 있음

type Todo = {
	text: string
	complete: boolean
}
