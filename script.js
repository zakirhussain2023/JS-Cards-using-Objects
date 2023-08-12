var mainTitle = document.createElement('h3');
var subTitle = document.createElement('h1');

var main_title = "THE STATISTICS";
var sub_title = "Our Success in Numbers";
mainTitle.innerHTML = main_title;
subTitle.innerHTML = sub_title;
mainTitle.setAttribute('class','mainhead');
subTitle.setAttribute('class','subhead');


var cards = [
    {
        count: "3200+",
        detail: "Hours of Training hours",
        bordertop:"#0d6efd"
    },
    {
        count: "490+",
        detail: "Trainees Placed",
        bordertop:"#0dcaf0"
    },
    {
        count: "20+",
        detail: "Technologies Covered",
        bordertop:'#198754'
    },
    {
        count: "100+",
        detail: "Hiring partners",
        bordertop:"ffc107"
    }
];


document.body.appendChild(mainTitle);
document.body.appendChild(subTitle);

var cardList = document.createElement('div');
cardList.id = 'card-list'; 
document.body.appendChild(cardList);


for (let i = 0; i < cards.length; i++) {
    var cardCount = document.createElement('h1');
    var cardDetail = document.createElement('p');
    var cardSec = document.createElement('div');
    
    var card = cards[i];
    cardCount.innerHTML = card.count;
    cardDetail.innerHTML = card.detail;
    cardSec.appendChild(cardCount);
    cardSec.appendChild(cardDetail);
    cardSec.style.borderTopColor=card.bordertop;
    
    cardList.appendChild(cardSec);
}
