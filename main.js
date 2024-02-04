const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();

    let hourDegree = day.getHours() * 30;
    let minDegree = day.getMinutes() * 6;
    let secDegree = day.getSeconds() * 6;

    hr.style.transform = `rotate(${hourDegree + (minDegree / 12)}deg)`;

    mn.style.transform = `rotate(${minDegree}deg)`;

    sc.style.transform = `rotate(${secDegree}deg)`;
},1000);
