var LC = require('./listCenter'),
  messages = {
    'publish': [{
      title: '5个JavaScript hack',
      description: '一些JavaScript技巧被有经验的程序员广泛使用。但对于初学者，这些技巧并不好直接理解。',
      picurl: 'http://william.xingyp.com/content/images/2014/Sep/image.jpg',
      url: 'http://william.xingyp.com/javascript-hacks-explained/'
    }],
    '帮助': 'menu',
    'defaults': '没有找到相关内容, 有需要请回复"帮助"'
    }
  };

exports.get = function (key, res) {
  var value = messages[key];

  if (!value) {
    res.reply(messages.defaults);
  } else {
    if (LC.list.indexOf(value)) {
      res.wait(value);
    } else {
      res.reply(value);
    }
  }
};
