var List = require('wechat').List;

List.add('view', [
  ['回复{a}查看我的性别', function (info, req, res) {
    res.reply('我是个妹纸哟');
  }],
  ['回复{b}查看我的年龄', function (info, req, res) {
    res.reply('我今年18岁');
  }],
  ['回复{c}查看我的性取向', '这样的事情怎么好意思告诉你啦- -']
]);

var text = function (message, req, res, next) {
  if (message.Content === '你谁啊') {
    res.wait('view');
  } else {
    if (message.FromUserName === 'diaosi') {
        // 回复屌丝(普通回复)
        res.reply('hehe');
      } else if (message.FromUserName === 'text') {
        //你也可以这样回复text类型的信息
        res.reply({
          content: 'text object',
          type: 'text'
        });
      } else if (message.FromUserName === 'hehe') {
        // 回复一段音乐
        res.reply({
          type: "music",
          content: {
            title: "来段音乐吧",
            description: "一无所有",
            musicUrl: "http://mp3.com/xx.mp3",
            hqMusicUrl: "http://mp3.com/xx.mp3"
          }
        });
      } else {
        // 回复高富帅(图文回复)
        res.reply([
          {
            title: '你来我家接我吧',
            description: '这是女神与高富帅之间的对话',
            picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
            url: 'http://nodeapi.cloudfoundry.com/'
          }
        ]);
    }

    //res.reply('呵呵');
    // 或者中断等待回复事务
    // res.nowait('hehe');
  }
}

module.exports = text;