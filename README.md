# qq-group-member
QQ群成员 号码 批量导出 （仅QQ号）QQ Group Members Export


https://qun.qq.com/member.html

登录后选好要导出的群（鼠标滚动到最下后再进行下面操作）

按F12在控制台输入

```javascript

// 限定在 tbody.list 内查找所有带 data-id 的元素
const elements = document.querySelectorAll('tbody.list [data-id]');

// 提取 data-id 并去重（兼容首尾空格）
const dataIds = [...new Set(
  Array.from(elements).map(el => el.getAttribute('data-id').trim())
)];

// 生成 TXT 文件
const txtContent = dataIds.join('\n');
const blob = new Blob([txtContent], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'list-data-ids.txt';
a.click();

