# D2Admin V2

## TODO

- [x] svg 尺寸参数
- [ ] svg 图标模式
- [x] Markdown 代码高亮
- [ ] Markdown 代码复制
- [x] 文件获取自身路径
- [x] 基于文件路径的 component name
- [x] 基于菜单和数据加当前页面计算应该展开的菜单层级
- [x] 分离自带页面的菜单数据便于后期灵活组合
- [x] Menu 类增加 index 方法用于设置一组菜单的首页
- [x] 页面向 layout 传递参数
- [x] 根据路由数据生成菜单的辅助函数

## Tips

### Route Meta

``` js
<route>
{
  "meta": {
    "d2admin.menu.title": "Menu Title"
  }
}
</route>
```

**layout**

| key | type |
| --- | ---- |
| d2admin.layout.dashboard.customBody | boolean |

**menu**

| key | type |
| --- | ---- |
| d2admin.menu.title | string |

### Syntax Highlighting `<route>`

To enable syntax highlighting `<route>` in VS Code using [Vetur's Custom Code Blocks](https://vuejs.github.io/vetur/highlighting.html#custom-block) add the following snippet to your preferences...

1. update setting
 
``` json
"vetur.grammar.customBlocks": {
  "route": "json"
}
```

2. Run the command in vscode
 
`Vetur: Generate grammar from vetur.grammar.customBlocks`

3. Restart VS Code to get syntax highlighting for custom blocks.
