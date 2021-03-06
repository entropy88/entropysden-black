function displayArticles() {


    let articlesArr = [];

    let articleZero = {
        title: "Изобретяване и история на печатната машина",
        text: "Ако зададем въпросa за развитието на печатната технология, мнозина биха отговорили, че началото е поставено от Гутенберг с изобретяването на печатната машина и биха сгрешили. Печатната машина на Гутенберг несъмнено е едно от най-фундаменталните открития в човешката история, предизвикало ефекта на доминото за разбиването на цензурата в стария свят и утвърдила бързото разпространение на идеи, но има много по-ранно датиращи предпоставки, без които нито машината, нито печатната индустрията биха съществували днес.Печатният процес е известен на човечеството от хилядолетия и макар крайният продукт на първите техники за печат по нищо да не прилича на днешната книга, то без тях и усъвършенстването им днешната печатна индустрия не би била същата. Спуснете се по спиралата на времето с нашите кратки статии свързани с печатната машина, за да си отговорим на следните въпроси:",
        link: "https://gutenbergpublishinghouse.wordpress.com/2019/09/10/%d0%b8%d0%b7%d0%be%d0%b1%d1%80%d0%b5%d1%82%d1%8f%d0%b2%d0%b0%d0%bd%d0%b5-%d0%b8-%d0%b8%d1%81%d1%82%d0%be%d1%80%d0%b8%d1%8f-%d0%bd%d0%b0-%d0%bf%d0%b5%d1%87%d0%b0%d1%82%d0%bd%d0%b0%d1%82%d0%b0-%d0%bc/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2019/09/printing-press-1.jpg?w=1400"
    }

    let articleOne = {
        title: "Роберто Арлт и „Гневната играчка“",
        text: "Романът „Гневната играчка“ от 1926 година ни отвежда по уличките на Буенос Айрес в компанията на един юноша-крадец, който се възхищава на Ницше и Достоевски. Силвио си мечтае за славата на откритията, но вместо това драска графити заедно с дребни мошеници и не успява да уталожи спомена за набързо отхвърлилата го приятелка, а на фона на всичко това, майка му му натяква да си намери работа. Този енергичен разказ не се задържа дълго на едно място и всяко драматично събитие бързо бива забравено, щом започне следващата глава.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2019/08/07/%d1%80%d0%be%d0%b1%d0%b5%d1%80%d1%82%d0%be-%d0%b0%d1%80%d0%bb%d1%82-%d0%b8-%d0%b3%d0%bd%d0%b5%d0%b2%d0%bd%d0%b0%d1%82%d0%b0-%d0%b8%d0%b3%d1%80%d0%b0%d1%87%d0%ba%d0%b0/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2019/08/arlt-art-fin.jpg"

    }

    let articleTwo = {
        title: "36 години в заточение – писателката Роса Часел",
        text: "Роса Часел (1898 – 1994) днес се счита за една от най-значимите испански писателки от XX в., макар и дълги години да е била напълно непозната в собствената си страна. Обаче през последните години на своя бурен живот, който понякога прилича повече на безкраен низ от приключения, тя неизменно била поставяна в редиците на най-оригиналните и самобитни мислители и активно присъствала в новините.Младостта на Роса Часел е свързана с испанския авангард в литературата, изящните и приложните изкуства. Само че литературната слава я застига чак през 60-те години на века, въпреки че вече има публикувани множество значими разкази, романи, стихове и есета. Тя споделя нелеката съдба на множество испански интелектуалци, които след гражданската война в страната са принудени да емигрират.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/14/36-%d0%b3%d0%be%d0%b4%d0%b8%d0%bd%d0%b8-%d0%b2-%d0%b7%d0%b0%d1%82%d0%be%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bf%d0%b8%d1%81%d0%b0%d1%82%d0%b5%d0%bb%d0%ba%d0%b0%d1%82%d0%b0-%d1%80%d0%be%d1%81%d0%b0/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2020/02/chacel_cover.jpg?w=1400"

    }

    let articleThree = {
        title: "проф. Александър Фол. Седем приказки за миналото на света",
        text: "В “Седем приказки за миналото на света” Александър Фол е вплел под формата на образователни приказки историята на света от древните времена до наши дни. Той разпалва детското въображение и интерес с помощта на митове и легенди и помага на децата да научат повече за древните цивилизации и техните постижения, върху които се гради и нашето съвремие, под формата на приказка.Чрез тази книга децата ще опознаят основни митологични, исторически и политически образи от европейската, азиатската и египетската култури, както и по-важните събития, нововъведения и постижения в човешката история. Тази книга ще помогне на децата да разберат ценности и идеали, като Право, Равенство, Справедливост, Свобода, като им представи на най-основно и незатормозяващо с години и излишни факти ниво историческите периоди и събития, като Античността, църковното влияние през Средновековието, разширяването на представите на света по време на Великите географски откритие, Просвещението и неговата Научна революция, както тъмната сянка на робството и борбите са свобода. А докато споделяте тази книга с малките читатели, ще можете да се насладите на живописните илюстрации на художника Любен Диманов.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2018/11/30/%d1%81%d0%b5%d0%b4%d0%b5%d0%bc-%d0%bf%d1%80%d0%b8%d0%ba%d0%b0%d0%b7%d0%ba%d0%b8-%d0%b7%d0%b0-%d0%bc%d0%b8%d0%bd%d0%b0%d0%bb%d0%be%d1%82%d0%be-%d0%bd%d0%b0-%d1%81%d0%b2%d0%b5%d1%82%d0%b0-%d0%be/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2018/11/sedem-prikazki-za-sveta-korica-loga-eu-1.jpg"
    }
    let articleFour = {
        title: "100-годишната книжарница, която се превърна в туристическа забележителност",
        text: "Някога „Шекспир и сие“, тази хаотично подредена книжарница, е била пристан за неопитни писатели модернисти – днес тя е легенда и пътешествениците могат да пренощуват в нея, стига да напишат автобиография.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/01/31/100-%d0%b3%d0%be%d0%b4%d0%b8%d1%88%d0%bd%d0%b0%d1%82%d0%b0-%d0%ba%d0%bd%d0%b8%d0%b6%d0%b0%d1%80%d0%bd%d0%b8%d1%86%d0%b0-%d0%bf%d1%80%d0%b5%d0%b2%d1%8a%d1%80%d0%bd%d0%b0%d0%bb%d0%b0-%d1%81%d0%b5/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2020/01/shakespeare-and-company-original-booksore-clean.jpg"

    }


    let articleFive = {
        title: "Философският роман „Господин Тест“",
        text: "Философският роман „Господин Тест“ най-напред започва да се появява (с разказа „Вечерта с господин Тест“) в списанието Le Centaur, издавано в Париж от Пол Валери и няколко негови приятели, между които Андре Жид и Пиер Луис. Читателите на тази история първоначално били малцина.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/13/%d1%84%d0%b8%d0%bb%d0%be%d1%81%d0%be%d1%84%d1%81%d0%ba%d0%b8%d1%8f%d1%82-%d1%80%d0%be%d0%bc%d0%b0%d0%bd-%d0%b3%d0%be%d1%81%d0%bf%d0%be%d0%b4%d0%b8%d0%bd-%d1%82%d0%b5%d1%81%d1%82/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2020/02/81pl7zeadl.jpg"
    }

    let articleSix = {
        title: "Великолепният – Лоренцо де Медичи",
        text: "Лоренцо де Медичи (1 януари, 1449 г. – 9 април, 1492 г.) е бил италиански държавник и на практика управник на Флорентинската република. Той е бил сред най-влиятелните и деятелни меценати през Ренесанса. Познат още и като Лоренцо Великолепни сред съвременните флорентинци, той е бил магнат, дипломат, политик и меценат на учени, художници и поети. ",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/07/%d0%b2%d0%b5%d0%bb%d0%b8%d0%ba%d0%be%d0%bb%d0%b5%d0%bf%d0%bd%d0%b8%d1%8f%d1%82-%d0%bb%d0%be%d1%80%d0%b5%d0%bd%d1%86%d0%be-%d0%b4%d0%b5-%d0%bc%d0%b5%d0%b4%d0%b8%d1%87%d0%b8/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2020/02/medici-crest-1.jpg"
    }
    let articleSeven = {
        title: "Да разходиш кокошките – мексиканската писателка Елена Понятовска",
        text: "Преди Елена Понятовска да има възможността да интервюира за пръв път  Хосефина Борхес, втората я накарала да сложи каишки на петте ѝ кокошки и да ги изведе на разходка. В Мексико, страна залята от социално неравенство, Борхес се смятала за силна като Понятовска – та образованата ѝ съзаклятничка дори не можела да разходи няколко кокошки.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/02/21/%d0%b4%d0%b0-%d1%80%d0%b0%d0%b7%d1%85%d0%be%d0%b4%d0%b8%d1%88-%d0%ba%d0%be%d0%ba%d0%be%d1%88%d0%ba%d0%b8%d1%82%d0%b5-%d0%bc%d0%b5%d0%ba%d1%81%d0%b8%d0%ba%d0%b0%d0%bd%d1%81%d0%ba%d0%b0%d1%82%d0%b0/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2020/02/poniatowska-featured-bps.jpg"
    }
    let articleEight = {
        title: "Емил Верхарн. Пламъци над календара",
        text: "Емил Верхарн (1855-1916) е белгийски поет, който е пишел на френски език, както и един от основоположниците на направлението на символизма. Гъвкавото слово на този белгиец е будило възхищение в не един от великите му съвременници, сред които могат да се откроят: Райнер Мария Рилке, Андре Жид, Морис Метерлинк, Огюст Роден, Стефан Цвайг, Валерий Брюсов и др",
        link: "https://gutenbergpublishinghouse.wordpress.com/2017/02/27/featured-content/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2017/02/verhaeren_test6.jpg?w=1400"
    }

    let articleNine = {
        title: "Мариана Малинова Тиен. Българо-китайски отношения в съвременния период",
        text: "Проблематиката в тази монография, която се представя за пръв път в българската историография като обобщаващ труд, е подчинена на различни аспекти, разкриващи характера, същността, ролята и въздействието на отношенията между България и Китайската народна република.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2017/02/27/blog-post-title-3/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2017/02/cover.jpg"
    }

    let article10 = {
        title: "Парацелз – вестител на съвременната медицина",
        text: "Филип Авреол Парацелз е швейцарски лекар и алхимик (средновековен лекар), известен с въвеждането на употребата на химията за медицински цели. Освен това той е и първият лекар, който правилно описва редица сериозни заболявания, сред които туберкулозата.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/03/26/%d0%bf%d0%b0%d1%80%d0%b0%d1%86%d0%b5%d0%bb%d0%b7-%d0%b2%d0%b5%d1%81%d1%82%d0%b8%d1%82%d0%b5%d0%bb-%d0%bd%d0%b0-%d1%81%d1%8a%d0%b2%d1%80%d0%b5%d0%bc%d0%b5%d0%bd%d0%bd%d0%b0%d1%82%d0%b0-%d0%bc%d0%b5/",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2020/03/paracelsus-surgery-no-label.jpg"
    }
    let article11 = {
        title: "5 начина да се сдобиете с търсената от вас книга, когато я няма по книжарниците",
        text: "В ролята си на читатели всички ние сме се изправяли пред патовата ситуация книгата, която искаме да закупим, да е с изчерпан тираж. При такива случаи често започва едно голямо търсене по сайтове и каталози на големи и малки книжарници, а резултатът, особено при по-стари издания, обикновено не е много обнадеждаващ. След това за нас, читателите, остава единствено да се надяваме и да чакаме издателите да измерят достатъчно голям читателски интерес и евентуално да решат да преиздадат желаното от нас заглавие. Това може да отнеме години или пък да не се случи никога – поради финансови затруднения на издателя, несъгласия около условията за следващ тираж с автора или просто твърде малък брой запитвания за изчерпаното заглавие. В тази статия ще ви ориентираме към 5 стъпки за възможно решение на казуса „изчерпан тираж“.",
        link: "https://gutenbergpublishinghouse.wordpress.com/2020/04/12/5-%d0%bd%d0%b0%d1%87%d0%b8%d0%bd%d0%b0-%d0%b4%d0%b0-%d1%81%d0%b5-%d1%81%d0%b4%d0%be%d0%b1%d0%b8%d0%b5%d1%82%d0%b5-%d1%81-%d1%82%d1%8a%d1%80%d1%81%d0%b5%d0%bd%d0%b0%d1%82%d0%b0-%d0%be%d1%82-%d0%b2/#step-five",
        pictureUrl: "https://gutenbergpublishinghouse.files.wordpress.com/2020/04/featured-image.jpg"
    }

    articlesArr.push(articleZero);
    articlesArr.push(articleOne);
    articlesArr.push(articleTwo);
    articlesArr.push(articleThree);
    articlesArr.push(articleFour);
    articlesArr.push(articleFive);
    articlesArr.push(articleSix);
    articlesArr.push(articleSeven);
    articlesArr.push(articleEight);
    articlesArr.push(articleNine);
    articlesArr.push(article10);
    articlesArr.push(article11);
    

    //create list on the right
    let articlesListDiv = document.getElementById("articlesList");
    for (let i = articlesArr.length - 1; i >= 0; i--) {
        let item = document.createElement("p");
        item.id = i;
        item.className = "listItem";
        item.innerText = articlesArr[i].title;
        item.addEventListener("click", function () {
            selectArticle(item.id)
        })
        articlesListDiv.appendChild(item);
    }

    //set the first article
    let title = document.getElementById("articleTitleP");
    title.innerText = articlesArr[articlesArr.length - 1].title;
    let image = document.getElementById("articleImage");
    image.src = articlesArr[articlesArr.length - 1].pictureUrl;
    let content = document.getElementById("articleContentP");
    content.innerText = articlesArr[articlesArr.length - 1].text;
    let link = document.getElementById("articleLink");
    link.href = articlesArr[articlesArr.length - 1].link;

    function selectArticle(id) {
        title.innerText = articlesArr[id].title;
        content.innerText = articlesArr[id].text;
        image.src = articlesArr[id].pictureUrl;
        link.href = articlesArr[id].link;
    }

}