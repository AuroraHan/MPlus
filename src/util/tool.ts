//是否为邮箱
const isEmail = (s: string) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
};

//是否手机号码
const isMobile = (s: string) => {
  return /^1[0-9]{10}$/.test(s);
};

//电话号码
const isPhone = (s: string) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};

//是否url地址
const isURL = (s: string) => {
  return /^http[s]?:\/\/.*/.test(s);
};

//滚动到顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

//el是否在视口范围内
const elementIsVisibleInViewport = (el: Element, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

//洗牌算法随机
const shuffle = (arr: Array<any>) => {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
};

//拦截粘贴板
const copyTextToClipboard = (value: string) => {
  var textArea = document.createElement('textarea');
  textArea.style.background = 'transparent';
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
};

//严格的身份证校验
const isCardID = (sId: string) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误');
    return false;
  }
  //身份证城市
  var aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };
  if (aCity) {
    console.log('你的身份证地区非法');
    return false;
  }

  // 出生日期验证
  var sBirthday = (
      sId.slice(6, 4) +
      '-' +
      Number(sId.slice(10, 2)) +
      '-' +
      Number(sId.slice(12, 2))
    ).replace(/-/g, '/'),
    d = new Date(sBirthday);
  if (
    sBirthday !=
    d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
  ) {
    console.log('身份证上的出生日期非法');
    return false;
  }

  // 身份证号码校验
  var sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = '10X98765432';
  for (var i = 0; i < sId.length - 1; i++) {
    sum += ~~sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.log('你输入的身份证号非法');
    return false;
  }

  return true;
};

//随机数范围
const random = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

//将阿拉伯数字翻译成中文的大写数字
const numberToChinese = (num: number) => {
  var AA = new Array(
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十'
  );
  var BB = new Array('', '十', '百', '仟', '萬', '億', '点', '');
  var a = ('' + num).replace(/(^0*)/g, '').split('.'),
    k = 0,
    re = '';
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$').test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (
      k % 4 == 2 &&
      parseInt(a[0].charAt(i + 2)) != 0 &&
      parseInt(a[0].charAt(i + 1)) == 0
    )
      re = AA[0] + re;
    if (parseInt(a[0].charAt(i)) != 0)
      re = AA[Number(a[0].charAt(i))] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6];
    for (var i = 0; i < a[1].length; i++) re += AA[Number(a[1].charAt(i))];
  }
  if (re == '一十') re = '十';
  if (re.match(/^一/) && re.length == 3) re = re.replace('一', '');
  return re;
};

//将数字转换为大写金额
const changeToChinese = (Num: any) => {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == 'number') {
    Num = new String(Num);
  }
  Num = Num.replace(/,/g, ''); //替换tomoney()中的“,”
  Num = Num.replace(/ /g, ''); //替换tomoney()中的空格
  Num = Num.replace(/￥/g, ''); //替换掉可能出现的￥字符
  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return '';
  }
  //字符处理完毕后开始转换，采用前后两部分分别转换
  var part = String(Num).split('.');
  var newchar = '';
  //小数点前进行转化
  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return '';
      //若数量超过拾亿单位，提示
    }
    var tmpnewchar = '';
    var perchar = part[0].charAt(i);
    switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar;
        break;
      case '1':
        tmpnewchar = '壹' + tmpnewchar;
        break;
      case '2':
        tmpnewchar = '贰' + tmpnewchar;
        break;
      case '3':
        tmpnewchar = '叁' + tmpnewchar;
        break;
      case '4':
        tmpnewchar = '肆' + tmpnewchar;
        break;
      case '5':
        tmpnewchar = '伍' + tmpnewchar;
        break;
      case '6':
        tmpnewchar = '陆' + tmpnewchar;
        break;
      case '7':
        tmpnewchar = '柒' + tmpnewchar;
        break;
      case '8':
        tmpnewchar = '捌' + tmpnewchar;
        break;
      case '9':
        tmpnewchar = '玖' + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + '元';
        break;
      case 1:
        if (Number(perchar) != 0) tmpnewchar = tmpnewchar + '拾';
        break;
      case 2:
        if (Number(perchar) != 0) tmpnewchar = tmpnewchar + '佰';
        break;
      case 3:
        if (Number(perchar) != 0) tmpnewchar = tmpnewchar + '仟';
        break;
      case 4:
        tmpnewchar = tmpnewchar + '万';
        break;
      case 5:
        if (Number(perchar) != 0) tmpnewchar = tmpnewchar + '拾';
        break;
      case 6:
        if (Number(perchar) != 0) tmpnewchar = tmpnewchar + '佰';
        break;
      case 7:
        if (Number(perchar) != 0) tmpnewchar = tmpnewchar + '仟';
        break;
      case 8:
        tmpnewchar = tmpnewchar + '亿';
        break;
      case 9:
        tmpnewchar = tmpnewchar + '拾';
        break;
    }
    var newchar = tmpnewchar + newchar;
  }
  //小数点之后进行转化
  if (Num.indexOf('.') != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = '';
      perchar = part[1].charAt(i);
      switch (perchar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar;
          break;
        case '1':
          tmpnewchar = '壹' + tmpnewchar;
          break;
        case '2':
          tmpnewchar = '贰' + tmpnewchar;
          break;
        case '3':
          tmpnewchar = '叁' + tmpnewchar;
          break;
        case '4':
          tmpnewchar = '肆' + tmpnewchar;
          break;
        case '5':
          tmpnewchar = '伍' + tmpnewchar;
          break;
        case '6':
          tmpnewchar = '陆' + tmpnewchar;
          break;
        case '7':
          tmpnewchar = '柒' + tmpnewchar;
          break;
        case '8':
          tmpnewchar = '捌' + tmpnewchar;
          break;
        case '9':
          tmpnewchar = '玖' + tmpnewchar;
          break;
      }
      if (i == 0) tmpnewchar = tmpnewchar + '角';
      if (i == 1) tmpnewchar = tmpnewchar + '分';
      newchar = newchar + tmpnewchar;
    }
  }
  //替换所有无用汉字
  while (newchar.search('零零') != -1) newchar = newchar.replace('零零', '零');
  newchar = newchar.replace('零亿', '亿');
  newchar = newchar.replace('亿万', '亿');
  newchar = newchar.replace('零万', '万');
  newchar = newchar.replace('零元', '元');
  newchar = newchar.replace('零角', '');
  newchar = newchar.replace('零分', '');
  if (newchar.charAt(newchar.length - 1) == '元') {
    newchar = newchar + '整';
  }
  return newchar;
};
export {
  isEmail,
  isMobile,
  isPhone,
  isURL,
  scrollToTop,
  elementIsVisibleInViewport,
  shuffle,
  copyTextToClipboard,
  random,
  numberToChinese,
  changeToChinese,
};
