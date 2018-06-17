/*
render({
  text: 'haha',
  a: 1,
  b: 2,
  c: 3,
});
*/
export default ({ text, a, b, c }) => `
<div class="logo">
  这里面可以随便写 html 代码，用模版字符串的方式把 json 渲染成 html
  logo: ${text}
  变量a: ${a}
  变量b: ${b}
  变量c: ${c}
</div>
`;
