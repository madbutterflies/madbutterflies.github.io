document.getElementById("link-main").addEventListener('click', switch_main);
document.getElementById("link-author").addEventListener('click', switch_aboutme);
document.getElementById("link-page").addEventListener('click', switch_aboupage);
document.getElementById("link-graphics").addEventListener('click', switch_graphics);
document.getElementById("link-help").addEventListener('click', switch_help);
document.getElementById("link-history").addEventListener('click', switch_history);
document.getElementById("link-links").addEventListener('click', switch_links);
document.getElementById("link-mvc").addEventListener('click', switch_mvc);
document.getElementById("link-sources").addEventListener('click', switch_sources);
document.getElementById("link-spa").addEventListener('click', switch_spa);
document.getElementById("link-techs").addEventListener('click', switch_techs);

function switch_main() {
    document.getElementById("div-1").innerHTML="<img alt=\"Tekst zastepczy, gdyby grafika sie nie renderowala\" id=\"pic1\" src=\"images/help.png\">\n" +
        "                    <h4>Pomoc</h4>\n" +
        "                    <p>Gdy nie masz już pomysłów, co wstawić na stronę...</p>\n" +
        "                    <a title=\"Rozwiniecie tematu dalej\" id=\"link-help\" href=\"#\">Rozwinięcie tematu</a>";
    document.getElementById("div-2").innerHTML="<img alt=\"Tekst zastepczy, gdyby grafika sie nie renderowala\" id=\"pic2\" src=\"images/Black_Cat_Vector.svg%20(1).png\">\n" +
        "                    <h4>Grafiki</h4>\n" +
        "                    <p>Czasem trzeba po prostu popatrzeć na zdjęcia małych kotków...</p>\n" +
        "                    <a title=\"Rozwiniecie tematu dalej\" id=\"link-graphics\" href=\"#\">Rozwinięcie tematu</a>";
    document.getElementById("div-3").innerHTML="<img alt=\"Tekst zastepczy, gdyby grafika sie nie renderowala\" id=\"pic3\" src=\"images/SPA.png\">\n" +
        "                    <h4>Single Page</h4>\n" +
        "                    <p>Czyli co to za zasady i czemu należy się do nich stosować</p>\n" +
        "                    <a title=\"Rozwiniecie tematu dalej\" id=\"link-spa\" href=\"#\">Rozwinięcie tematu</a>";
    document.getElementById("link-help").addEventListener('click', switch_help);
    document.getElementById("link-graphics").addEventListener('click', switch_graphics);
    document.getElementById("link-spa").addEventListener('click', switch_spa);
    document.getElementById("einstein").className="";
    document.getElementById("vis-cont-1").className="";
    document.getElementById("vis-cont-2").className="";
    document.getElementById("vis-cont-2").className="";
    document.getElementById("vis-cont-3").className="";
    document.getElementById("header-title").className="";
    document.getElementById("back-to-earth").className="exosphere";
    document.getElementById("index-v").innerHTML="<h2>Wykonane Zadania</h2>\n" +
        "                <p>Nniejsza strona jest szablonem wykonanym według poleceń zadania 1. z zajęć Programowanie w\n" +
        "                    Internecie odbywających się na kierunku Informatyka w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie.\n" +
        "                    Szablon ten zostanie wykorzystany podczas wykonywania części następnych zadań, których pełną listę można znaleźć pod następującym linkiem..\n" +
        "                </p>\n" +
        "                <a class=\"btn\" title=\"Zobacz listę wykonanych zadań\" href=\"../index.html\">Menu Zadań</a>";
}
function switch_aboutme() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<h2>O autorze...</h2>\n" +
        "            <p>Nniejsza strona została stworzona przez studentkę trzeciego roku na kierunku Informatyka Wydziały Zastosowań Informatyki i Matematyki w Warszawie, Magdalenę Głażewską.\n" +
        "            </p>\n" +
        "            <p>Dalsze informację zostały ograniczone w celu ochrony danych osobistych ;)</p>";
}
function switch_aboupage() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<h2>O stronie...</h2>\n" +
        "            <p>Nniejsza strona jest szablonem wykonanym według poleceń zadania 1. z zajęć Programowanie w\n" +
        "                Internecie odbywających się na kierunku Informatyka w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie.\n" +
        "            </p>\n" +
        "            <p>Do wykonania tej strony użyto wyłącznie języków skryptowych HTML5 oraz CSS3. Strona została wykonanana w zgodności z przęglądarkami {spis}.\n" +
        "            </p>\n" +
        "            <p>Szablon ten zostanie wykorzystany podczas wykonywania części następnych zadań, których pełną listę można znaleźć pod następującym linkiem..\n" +
        "            </p>\n" +
        "            <a class=\"btn\" title=\"Zobacz listę wykonanych zadań\" href=\"../index.html\">Menu Zadań</a>";
}
function switch_graphics() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="Placeholder";
}
function switch_help() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<blockquote>\n" +
        "            <p class=\"quote\">\n" +
        "                Jednak przekonacie się, że naprawdę opuszczę szkołę tylko wtedy, kiedy już nikt w całym Hogwarcie nie pozostanie mi wierny.\n" +
        "                Przekonacie się również, że ci, którzy o pomoc poproszą, zawsze ją otrzymają.\n" +
        "            </p>\n" +
        "            <p class=\"credit\"><strong>Albus Dumbledore</strong><br><em>Harry Potter i Komnata Tajemnic, J.K.Rowling</em></p>\n" +
        "        </blockquote>";
}
function switch_history() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<blockquote>\n" +
        "            <p class=\"quote\">\n" +
        "                Czas znika, mija przeszłość, wiek niezwrotnie bieży,\n" +
        "                <br>A występków szkaradność lub cnoty przykłady,\n" +
        "                <br>Te obrzydłe, te święte zostawują ślady.\n" +
        "            </p>\n" +
        "            <p class=\"credit\"><strong>Ignacy Krasicki</strong><br><em>Do ks. Adama Naruszewicza, o pisaniu historii</em></p>\n" +
        "        </blockquote>";
}function switch_links() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<h2>Pomocne linki</h2>\n" +
        "            <p>Strona dostarczająca wszystkich informacji na temat kolorów w web design jakie mogą być potrzebne\n" +
        "            </p>\n" +
        "            <p><a class=\"btn\" title=\"Przydatny Link\" href=\"https://htmlcolorcodes.com/\" target=\"_blank\">Click!</a></p>\n" +
        "            <p>Bardzo efektowne tutoriale z technologii webowych.\n" +
        "            </p>\n" +
        "            <p><a class=\"btn\" title=\"Przydatny Link\" href=\"https://developer.mozilla.org/en-US/docs/Learn/HTML\" target=\"_blank\">Click!</a></p>\n" +
        "            <p>Jeszcze więcej użytecznych informacji!\n" +
        "            </p>\n" +
        "            <p><a class=\"btn\" title=\"Przydatny Link\" href=\"https://www.thesitewizard.com/\" target=\"_blank\">Click!</a></p>";
}
function switch_mvc() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<h2>MVC...</h2>\n" +
        "            <p> to skrót od słów model-view-controller, czyli po polsku model, widok i kontroler.\n" +
        "            </p>\n" +
        "            <p>Określa on wzorzec architektoniczny oprogramowania charakteryzujący się budową złożoną z trzech komponentów:\n" +
        "            </p>\n" +
        "            <p><i><b>Modelu</b>, reprezentującego logikę biznesową. W nim znajdują się wszystkie obiekty potrzebne do wykonywania operacji wynikających z implementacji wymaganych funkcjonalności.</i></p>\n" +
        "            <i><b>Widoku</b>, będącego warstwą prezentacyjną, czyli tak zwanym graficznym interfejsem użytkownika, prezentującym wyniki działania logiki biznesowej.</i></p>\n" +
        "            <i><b>Kontrolera</b>, który obsługuije wszystkie żądania i deleguje odpowiednie działania do odpowiednich części logiki</i></p>\n" +
        "            <p>Powyższy wzorzec jest najczęściej używanym i optymalnym z obecnie istniejących wzorców projektowych dla aplikacji webowych.\n" +
        "            </p>\n" +
        "            <a class=\"btn\" title=\"Dowiedz się więcej\" href=\"http://michalorman.pl/blog/2010/03/model-widok-kontroler/\">Źródło</a>";
}
function switch_sources() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<h2>Strona została stworzona w oparciu o...</h2>\n" +
        "            <p>Informacje udostępnione w wykładach podczas zajęć z programowania w internecie oraz te znalezione w internecie. Głowne źródła podane zostały w zakładce <i>Ważne Linki</i>\n" +
        "            </p>\n" +
        "            <p>Wszystkie grafiki widoczne na stronie pochodzą z serwisów <i>flaticon</i>, <i>wikimedia commons</i>  lub stworzone zostały przez autorkę strony w programie <b>Paint</b>.</p>\n" +
        "            <a class=\"btn\" title=\"Zobacz listę wykonanych zadań\" href=\"../index.html\">Menu Zadań</a>";
}
function switch_spa() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").innerHTML="<h2>Single Page Application</h2>\n" +
        "            <p>To podejście do tworzenia serwisó i stron internetowych zakładające, że całość zawartości tej strony lub serwisu znajduje się w jednym pliku HTML, a sama strona renderowana jest na bieżąco przez zewnętrzne funkcję skryptowane w innych językach progrtamowania, np. w javascript.\n" +
        "            </p>\n" +
        "            <p>O SPA można dowiedzieć się wiecej klikając w poniższy link.\n" +
        "            </p>\n" +
        "            <a class=\"btn\" title=\"Dowiedz się więcej\" href=\"https://medium.com/@pshrmn/demystifying-single-page-applications-3068d0555d46\" target=\"_blank\">Click!</a>";
}
function switch_techs() {
    document.getElementById("div-1").innerHTML="";
    document.getElementById("div-2").innerHTML="";
    document.getElementById("div-3").innerHTML="";
    document.getElementById("einstein").className="exosphere";
    document.getElementById("vis-cont-1").className="exosphere";
    document.getElementById("vis-cont-2").className="exosphere";
    document.getElementById("vis-cont-3").className="exosphere";
    document.getElementById("header-title").className="exosphere";
    document.getElementById("back-to-earth").className="back-to-earth";
    document.getElementById("index-v").className="stratosphere rocket"
    document.getElementById("index-v").innerHTML="<h2>Czym są technologie webowe?</h2>\n" +
        "            <p>Krótko mówiąc, jest to grupa technologii używana do programowania aplikacji, serwisów czy też stron internetowym.\n" +
        "            </p>\n" +
        "            <p>Do tej grupy należą zarówno języki skryptowe, tzw. <i>client-side</i> takie jak HTML, CSS czy też JavaScript, jak i technologie <i>server-side</i>,których może być o wiele więcej.\n" +
        "            </p>\n" +
        "            <p>Poniżej opisane są w dużym skrócie najważniejsze technologie webowe:\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                HTML, czyli Hyper-Text Markup Language to język oparty na znacznikach, opisowy. Przechowuje on zawartość widoku strony internetowej\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                CSS, Cascading Style Sheets definiuje styl elementów strony, tzn nadaje im odpowiedni wygląd.\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                JavaScript to język programowania skryptowego stosowany głównie do obsługi interakcji użytkownika z widokiem.\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                PHP to także język programowania skryptowego, aczkolwiek używany głównie do budowania aplikacji internetowych po stronie serwera.\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                ASP .NET to zbiór technologii opartych na frameworku .NET przeznaczony właśnie do budowy aplikacji internetowych\n" +
        "            </p>\n" +
        "            <a class=\"btn\" title=\"Dowiedz się więcej\" href=\"http://www.alphadevx.com/a/7-The-Basics-of-Web-Technologies\" target=\"_blank\">Dowiedz się więcej</a>";
}