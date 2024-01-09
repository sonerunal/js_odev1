let name = prompt("AD = ? ");
document.getElementById("myName").innerHTML = name;

function showTime() {
    let zaman = new Date();
    let Weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    let hours =  zaman.getHours() < 10 ? "0"+zaman.getHours() : zaman.getHours();
    let minute = zaman.getMinutes() < 10 ? "0"+zaman.getMinutes() : zaman.getMinutes();
    let second = zaman.getSeconds() < 10 ? "0"+zaman.getSeconds() : zaman.getSeconds();
    let day = Weekdays[zaman.getDay()];

    time = hours + ":" + minute + ":" + second + " " + day ;

    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();