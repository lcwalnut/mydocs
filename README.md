# react exam 01

请实现支持如下代码的InputNumber组件，可以受控和非受控。

提交形式：请将代码上传 GitHub ，并将对应链接粘贴在答题框内提交。

```js
function App() {
  const [value, setValue] = useState("aaa");
  return (
    <div>
              
      <InputNumber value={value} onChange={(e) => {}} />
              
      <InputNumber defaultValue={value} onChange={(e) => {}} />
              
    </div>
  );
}
```
