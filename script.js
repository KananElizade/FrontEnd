function showPage(page) {
    let content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = `<h1>Welcome to our WebSite</h1>
                             <p>This is a simple website with static navigation. Click on the menu items to see different pages.</p>`;
    } else if (page === "about") {
        content.innerHTML = `<h1>About</h1>
                             <p>Ölkə ərazisində 78 mağaza ilə fəaliyyət göstərən “Bazarstore” Mağazalar Şəbəkəsi ümumilikdə 127.674 m2 ərazini əhatə edir və 3200 nəfər işçi ilə müştərilərinə yüksək səviyyədə xidmət göstərir.Eyni zamanda Bazarstore "bazarstore.az" saytını müştərilərin ixtiyarına verib. Bu sayt vasitəsilə müştərilər onlayn sifariş edə, mağazaların ünvanlarını öyrənə, "Onlayn Chat" vasitəsi ilə əlaqə saxlaya, işə müraciət edə, qeydiyyatdan keçərək "Super Kart" əldə edə bilirlər.</p>`;
    } else if (page === "services") {
        content.innerHTML = `<h1>Services</h1>
                             <p> =Biz sizə yüksək keyfiyyətli məhullar təqdim edirik.Büdcənizə uyğun ən sərfəli qiymətlərlə xidmətinizdəyik.</p>`;
    } else if (page === "contact") {
        content.innerHTML = `<h1>Contact with Us</h1>
                             <p>Nom:055-555-55-55</p>
                             <p>Nom:010-320-13-23</p>
                             <p>Nom:077-777-77-77</p>
                             <p>instagram:Bazarstore</p>
                             <p>Email:BazarStore1@gmail.com</p>`;
    }
     else if (page === "New Info") {
    content.innerHTML = `<h1>Updated Info</h1>
                         <p>Bazar Store ailəsi Qalatasaray FC tərəfdari olduğu üçün GS azərkeşləri üçün endirim təqidm edəcəyik.Heç heyfslənməyin Fenerbahce azərkeşləri sizin üçündə Salfetləri endirimə qoydug göz yaşlarınızı siləsiz deyə çünki Championlug əldən getdi.</p>`;
    }
    
}