# qq-group-member
QQ群成员 号码 批量导出 （仅QQ号）QQ Group Members Export


https://qun.qq.com/member.html

登录后选好要导出的群

按F12在控制台输入

```javascript
// 获取所有带 data-id 属性的元素
const elements = document.querySelectorAll('[data-id]');

// 提取 data-id 值到数组
const dataIds = Array.from(elements).map(el => el.getAttribute('data-id'));

// 生成 TXT 内容（每行一个值）
const txtContent = dataIds.join('\n');

// 创建并触发下载
const blob = new Blob([txtContent], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'all-data-ids.txt';
a.click();




