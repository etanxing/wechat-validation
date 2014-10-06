var List = require('wechat').List;

List.add('menu', [
  ['回复{a}查看我的性别',
    function(info, req, res) {
      res.reply('我是个妹纸哟');
    }
  ],
  ['回复{b}查看我的年龄',
    function(info, req, res) {
      res.reply('我今年18岁');
    }
  ],
  ['回复{c}查看我的性取向', '这样的事情怎么好意思告诉你啦- -']
]);

var text = function(message, req, res, next) {
  if (message.Content === 'publish') {
    res.reply([{
      title: '5个JavaScript hack',
      description: '一些JavaScript技巧被有经验的程序员广泛使用。但对于初学者，这些技巧并不好直接理解。',
      picurl: 'http://william.xingyp.com/content/images/2014/Sep/image.jpg',
      url: 'http://william.xingyp.com/javascript-hacks-explained/'
    }]);
  } else if (message.Content === '帮助') {
    res.wait('menu');
  } else {
    res.reply('你好！有需要请回复"帮助"');
    // 或者中断等待回复事务
    // res.nowait('hehe');
  }
}

module.exports = text;
