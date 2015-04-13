var List = require('wechat').List,
  list = Object.create(null);


function add(message, key, value) {
  list[message] = key;
  List.add(key, value);
}

add('帮助', 'menu', [
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

exports.list = Object.keys(list);

exports.get = function (key) { 
  return list[key];
}