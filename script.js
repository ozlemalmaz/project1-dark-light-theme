const button = document.querySelector("#button");
// document.querySelector('#button') id değeri button olan ögeyş seçmek için kullanılır.
let theme ="light"; //theme değişkeni başlangıçta light olarak atandı.

button.addEventListener("click", () => { //butonu tıklanır hale getirdi.
    if (theme =="light"){
        document.documentElement.classList.add("dark-theme");
        theme="dark";
        button.textContent="Açık"; //butondaki yazıyı değiştirdi.
    }else if (theme==="dark"){
        document.documentElement.classList.remove("dark-theme");
        theme="light";
        button.textContent="Koyu";
    }
})