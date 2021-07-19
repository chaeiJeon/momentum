const form = document.querySelector("#search-form");
const input = document.createElement("input");
const naverLabel = document.createElement("label");
const googleLabel = document.createElement("label");
const naver = document.createElement("input");
const google = document.createElement("input");
const br = document.createElement("br");

naver.type="checkbox";
google.type="checkbox";
naverLabel.innerText="naver";
googleLabel.innerText="google";
form.appendChild(naver);
form.appendChild(naverLabel);
form.appendChild(google);
form.appendChild(googleLabel);

form.appendChild(br);

input.type="text";
input.placeholder="검색어를 입력하세요";
form.appendChild(input);

function search(event){
    event.preventDefault();
    
    if(naver.checked){
        open(`https://search.naver.com/search.naver?query=${input.value}`);
        naver.checked=false;
    }
    else if(google.checked){
        open(`https://www.google.com/search?q=${input.value}`);
        google.checked=false;
    }

    input.value="";
}

form.addEventListener("submit",search);
