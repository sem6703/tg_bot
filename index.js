const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = '5519678280:AAEUQ5K1VRl9JQ6RrjK_rsgX_SrKXo'; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, {polling: true});

//конфиг клавиатуры
const keybo = [
    [
      {
        text: 'Хочу кота', // текст на кнопке
        callback_data: 'moreKeks' // данные для обработчика событий
      }
    ],
    [
        {
          text: 'Хочу песика',
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
    const chatId = query.message.chat.id;

    let img = '';//запрос картинки

    if (query.data === 'moreKeks') { // если кот
        img = 'keks.jpg';
    }

    if (query.data === 'morePes') { // если пёс
        img = '603291.jpg'//
    }
	
    if (query.data === 'DL') { //
        img = 'dl.jpg'//
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
