const getir = document.getElementById("mutfak");
const trendyol = document.getElementById("mutfak1");
const yemeksepeti = document.getElementById("mutfak2");

var data;

const radios = document.getElementsByName("inlineRadioOptions");
function showInputs(event) {
    data = event.target.value;
    if (event.target.value === "option1") {
        getir.classList.remove("paket");
        trendyol.classList.add("paket1");
        yemeksepeti.classList.add("paket2");
    } else if (event.target.value === "option2") {
        getir.classList.add("paket");
        trendyol.classList.remove("paket1");
        yemeksepeti.classList.add("paket2");
    } else {
        getir.classList.add("paket");
        trendyol.classList.add("paket1");
        yemeksepeti.classList.remove("paket2");
    }
}
function add(event) {
    event.preventDefault();
    console.log("event", data);
    const input = document.forms["form"]["names"].value;
    const input1 = document.forms["form"]["name1"].value;
    const input2 = document.forms["form"]["name2"].value;
    const input3 = document.forms["form"]["name3"].value;
    const input4 = document.forms["form"]["name4"].value;
    const input5 = document.forms["form"]["name5"].value;
    const input6 = document.forms["form"]["name6"].value;
    const input7 = document.forms["form"]["name7"].value;
    const input8 = document.querySelector('#name').value
    document.querySelector('#submit').style.display = 'none'
    console.table('input2', input, 'input1', input8)
    if (data === "option1") {
        if (input === "" || input8 === "") {
            document.querySelector(".form")
                .innerHTML += `<div class="alert alert-danger mt-3" role="alert">
        Üzgünüz bir hata oluştu entegrasyon tamamlanamadı
      </div>`;
        }
        else {
            document.querySelector(".form")
                .innerHTML += `<div class="alert alert-info mt-3" role="alert">
                        Tebrikler entegrasyon tamamlandı
                </div>`;


        }
    }
    else if (data === 'option2') {
        if (input1 === "" || input2 === "" || input3 === "") {
            document.querySelector(".form")
                .innerHTML += `<div class="alert alert-danger mt-3" role="alert">
                Üzgünüz bir hata oluştu entegrasyon tamamlanamadı
                </div>`;

        }
        else {
            document.querySelector(".form")
                .innerHTML += `<div class="alert alert-info mt-3" role="alert">
                        Tebrikler entegrasyon tamamlandı
                </div>`;
        }
    }
    else if (data === 'option3') {
        if (input4 === "" || input5 === "" || input6 === "" || input7 === "") {
            document.querySelector(".form")
                .innerHTML += `<div class="alert alert-danger mt-3" role="alert">
                Üzgünüz bir hata oluştu entegrasyon tamamlanamadı
                </div>`;

        }
        else {
            document.querySelector(".form")
                .innerHTML += `<div class="alert alert-info mt-3" role="alert">
                        Tebrikler entegrasyon tamamlandı
                </div>`;
        }
    }
    else {
        document.querySelector(".form")
            .innerHTML += `<div class="alert alert-danger mt-3" role="alert">
                Üzgünüz bir hata oluştu entegrasyon tamamlanamadı
                </div>`;
    }

}
