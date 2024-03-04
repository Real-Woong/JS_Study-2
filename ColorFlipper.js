// 페이지 로드가 완료되면 실행됩니다.
$(document).ready(function (){
    // jQuery의 단축된 문법을 사용하여 코드를 실행합니다.
    $(function () {
        // HTML 요소들을 선택합니다.
        const background = document.querySelector(".container"); // 배경 요소 선택
        const changeText = document.querySelector(".contents span"); // 텍스트 변경 요소 선택
        const btn = document.querySelector(".button"); // 버튼 요소 선택

        // 색상 목록 배열
        const colors = [
            { id: 1, name: "red", color: "#ea052d"},
            { id: 2, name: "orange", color: "#ea7805"},
            { id: 3, name: "yellow", color: "#eac805"},
            { id: 4, name: "green", color: "#a1ea05"},
            { id: 5, name: "skyblue", color: "#05c1ea"},
            { id: 6, name: "blue", color: "#0545ea"},
            { id: 7, name: "violet", color: "#7c05ea"},
            { id: 8, name: "pink", color: "#ffc0cb"},
            { id: 9, name: "mint", color: "#4fffb0"},
        ];

        // 버튼 클릭 시 실행될 함수
        const clickHandler = () => {
            // 랜덤한 색상을 선택합니다.
            const randomNumber = Math.floor(Math.random() * colors.length);
            // 배경 색상 변경
            background.style.backgroundColor = colors[randomNumber].color;
            // 텍스트 변경
            changeText.textContent = colors[randomNumber].name;
            // 텍스트 색상 변경
            changeText.style.color = colors[randomNumber].color;
        };

        // 버튼에 클릭 이벤트 리스너 추가
        btn.addEventListener("click", clickHandler);
    });
});
