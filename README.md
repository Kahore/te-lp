# te-lp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Задача: сделать простой список сообщений.

- Окно делится на две части: слева - список сообщений, справа - окно отображения диалога.
- В левой части отображается тема, дата диалога и часть первого сообщения.
- В правой части отображается список сообщений (parts) с указанием автора, текста сообщения и даты.
- Также, здесь внизу расположено поле, которое позволяет добавить запись в текущий диалог.

Макет: https://www.figma.com/file/VUgBI3xtcU56EDR4u7uJVK/Test

### Требования:
- Приложение должно быть реализовано на Vue JS с использованием Vuex или подобного
- Поддерживать роутинг (отображение конкретного диалога по ID)
- При открытии диалога, на правой стороне со списком сообщений отображается анимированный лоадер (анимация загрузки)
- При отправке нового сообщения блокируется поле для ввода и кнопка отправки, а также появляется анимированный лоадер на время отправки
- Для тестирования можно установить искуственную задержку, чтобы эти лоадеры были видны (то есть отправлять данные на сервер не нужно, все работает в локальном состоянии)
- Верстка по БЭМ

Важно! Создайте приложение в лучших традициях компонентного подхода.
Представьте, что приложение будет дальше развиваться и обрастать разным функционалом.

Пример данных:
  [
    {
      id: 1,
      subject: 'Простой запрос',
      created: '2019-08-01 23:59',
      parts: [
        {
          id: 1,
          author: 'vasya',
          text: 'Привет, как дела?',
          created: '2019-08-01 23:59',
        },
        {
          id: 2,
          author: 'petya',
          created: '2019-08-02 01:20',
          text: 'Привет, все хорошо, спасибо!',
        },
        {
          id: 3,
          author: 'petya',
          created: '2019-08-02 05:20',
          text: 'А у тебя?',
        },
      ],
    },
    {
      id: 2,
      subject: 'Вопрос по домену',
      created: '2016-03-02 14:19',
      parts: [
        {
          id: 1,
          author: 'petr',
          created: '2019-08-06 12:20',
          text: 'Здравствуйте, тут есть кто-нибудь?',
        },
        {
          id: 2,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Да, я вас слушаю!',
        },
        {
          id: 3,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'Помогите мне настроить домен!',
        },
      ],
    },
  ];