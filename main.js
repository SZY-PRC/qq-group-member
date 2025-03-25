// 获取所有带 data-id 的元素
const elements = document.querySelectorAll('[data-id]');

// 提取 data-id 数值到数组
const dataIds = Array.from(elements).map(el => el.getAttribute('data-id'));

// 生成 TXT 内容（每行一个数值）
const txtContent = dataIds.join('\n');

// 触发下载
const blob = new Blob([txtContent], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'all-data-ids.txt';
a.click();
