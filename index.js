/*
по мотивам урока
https://www.youtube.com/watch?v=R4RhgBJpXSQ&t=17s&ab_channel=WebDevснуля.КаналАлексаЛущенко
*/

const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = '5519678280:AAEUQ5K1VRl9JQ6RrjK_rsgX_SrKXo'; // тут токен который мы получили от botFather

// включаем самого бота
const bot = new TelegramBot(token, {polling: true});

//конфиг клавиатуры
let keybo = [
    [
        {
          text: 'Хочу песика ',
          callback_data: 'morePes'
        }
    ],
	
    [
        {
          text: 'Хочу DL',
          callback_data: 'DL'
        }
    ],
    [
        {
          text: 'Что-то непонятное',
          callback_data: 'omg'
        }
    ]		
	
  ];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, chatId+' Привет, Друг! чего хочешь?', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keybo
        }
    });
});


// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
	count++;
	keybo[0][0].text='Хочу песика '+count;// коррекирую надпись на кнопке
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'moreKeks') { // если кот
        img = 'keks.jpg';
    }

    if (query.data === 'morePes') { // если пёс
	    img = dog[Math.random()*dog.length|0];
	}
	
    if (query.data === 'DL') { //
        img = 'dl.jpg'
    }	
	
		

    if (img) {
        bot.sendPhoto(chatId, img, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keybo
            }
        });
    } else {
        bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keybo
            }
        });
    }
  });


let dog=[];

void (async()=>{
  try {  
		const i=await fetch('https://dog.ceo/api/breeds/image/random');
		const t=await i.json();
		dog.push(t['message']);	  
	  
  } catch (e) {
		dog=[
		'https://images.dog.ceo/breeds/germanshepherd/n02106662_13904.jpg', 
		'https://images.dog.ceo/breeds/bluetick/n02088632_4313.jpg', 
		'https://images.dog.ceo/breeds/mastiff-english/2.jpg',
		'https://images.dog.ceo/breeds/groenendael/n02105056_4205.jpg',
		'https://images.dog.ceo/breeds/rottweiler/n02106550_3969.jpg',		
		'https://random.dog/175c551f-d957-4be4-a15b-79dc3f0323fe.jpg',
		'https://random.dog/6c32c078-794b-4b95-bbc4-1f272c69486f.jpg', 
		'https://random.dog/fd66efed-7054-4a2a-ae6b-423a52070635.jpg', 
		'https://random.dog/c88c5e58-c122-426b-a98d-3c97341e13d8.jpg', 
		'https://random.dog/c2ef8b9e-4ebe-4148-9684-bfa84111298f.PNG', 
		'https://random.dog/e1311960-ea27-49a2-9789-d854f4500fea.gif',
		'https://random.dog/cdfe24b3-8ba8-44b1-a5f4-4174936dabb6.jpg',
		'https://random.dog/866c8bed-e040-4e05-9009-9d525e03c9f6.jpg',
		'https://random.dog/c146850f-3420-46b6-b03a-0e4f873d8a93.jpg',
		'https://images.dog.ceo/breeds/bluetick/n02088632_2454.jpg',
		'https://images.dog.ceo/breeds/airedale/n02096051_5952.jpg',
		'https://images.dog.ceo/breeds/poodle-standard/n02113799_298.jpg',
		'https://images.dog.ceo/breeds/germanshepherd/n02106662_18405.jpg',
		'https://images.dog.ceo/breeds/terrier-american/n02093428_3269.jpg'		 
		];
	  }     
})()

