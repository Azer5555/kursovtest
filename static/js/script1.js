let switchMode = document.getElementById("switchMode");
switchMode.onclick =function (){
    let theme = document.getElementById("theme");
    console.log(theme.getAttribute("href"))
    if (theme.getAttribute("href") === "/static/css/1.css"){
        theme.href ="/static/css/1dark.css";
        document.cookie = "theme=dark"
    }
    else{
        theme.href ="/static/css/1.css";
        document.cookie = "theme=light"
    }
}
function answer1(){
	const mbody = document.querySelector(".chatBody");
	let card=
		`<p class="theirMessage bg-warning align-self-end p-3 w-50 d-flex text-start">
		Где располагается наша компания?
	</p>
	<p class="theirMessage bg-dark text-light align-self-start p-3 w-50">
		Мы располагаемся по адресу ул. Советская, 1, Кострома, Костромская обл.
	</p>
	`;
	mbody.insertAdjacentHTML('beforeend', card);
	mbody.scrollTop = mbody.scrollHeight;
}

function answer2(){
	const mbody = document.querySelector(".chatBody");
	let card=
		`<p class="theirMessage bg-warning align-self-end p-3 w-50 d-flex text-start">
		Какое кольцо самое дорогое?
	</p>
	<p class="theirMessage bg-dark text-light align-self-start p-3 w-50">
		Кольцо из белого золота с бриллиантами за  90 000₽ <br> >.<
	</p>
	`;
	mbody.insertAdjacentHTML('beforeend', card);
	mbody.scrollTop = mbody.scrollHeight;
}

function answer3(){
	const mbody = document.querySelector(".chatBody");
	let card=
	`<p class="theirMessage bg-warning align-self-end p-3 w-50 d-flex text-start">
	На каком автобусе можно до вас доехать?
</p>
<p class="theirMessage bg-dark text-light align-self-start p-3 w-50">
	Нуу.. Смотря откуда ехать.. Из-за Волги на 57, из Давыдовского на 4, 51, 56, с Рабочего проспекта тоже на 57!
</p>
`;
	mbody.insertAdjacentHTML('beforeend', card);
	mbody.scrollTop = mbody.scrollHeight;
}

function answer4(){
	const mbody = document.querySelector(".chatBody");
	let card=
		`<p class="theirMessage bg-warning align-self-end p-3 w-50 d-flex text-start">
		Быстро доставляете кольца?
	</p>
	<p class="theirMessage bg-dark text-light align-self-start p-3 w-50">
		Конечно! После покпуки заказ прибудет в течении 2-3 дней
	</p>
	`;
	mbody.insertAdjacentHTML('beforeend', card);
	mbody.scrollTop = mbody.scrollHeight;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}