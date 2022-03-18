# 演示文档

> 此文档用于测试 Markdown 渲染效果和填充页面

---

[D2Admin](https://github.com/d2-projects/d2-admin) 是一个完全 **开源免费** 的企业中后台产品前端集成方案，使用最新的前端技术栈，小于 60kb 的本地首屏 js 加载，已经做好大部分项目前期准备工作，并且带有大量示例代码，助力管理系统敏捷开发。

**中文** | [English](https://github.com/d2-projects/d2-admin)

## 预览

下列访问地址均由最新的 master 分支代码同时构建部署，访问效果完全一致，请根据自身网络情况选择合适的访问链接。

| 位置 | 链接 | 部署位置 |
| --- | --- | --- |
| d2.pub | [preview](https://d2.pub/d2-admin/preview) | 中国服务器 |
| cdn.d2.pub | [preview](https://cdn.d2.pub/d2-admin/preview) | 七牛云 CDN |
| github | [preview](https://d2-projects.github.io/d2-admin) | GitHub pages |
| netlify | [preview](https://d2-admin.netlify.com) | Netlify CDN |

## 文档

[在 https://d2.pub 上的本项目文档](https://d2.pub/zh/doc/d2-admin/)

> d2.pub CDN 镜像部署 [https://cdn.d2.pub](https://cdn.d2.pub)

## 功能

* 使用 vue-cli3 构建
* 首屏加载等待动画
* 五款主题
* 内置 UEditor 富文本编辑器
* 详细的文档
* 登录和注销
* 分离的路由和菜单设置
* 可折叠侧边栏
* 多国语
* 富文本编辑器
* Markdown 编辑器
* 全屏
* Fontawesome 图标库
* 图标选择器
* 自动注册 SVG 图标
* 模拟数据
* 剪贴板封装
* 图表库
* 时间日期计算工具
* 导入 Excel （ xlsx + csv ）
* 数据导出 Excel （ xlsx + csv ）
* 数据导出文本
* 数字动画
* 可拖拽调整大小的区块布局
* 可拖拽调整大小和位置的网格布局
* 开箱即用的页面布局组件
* 加载并解析 markdown 文件
* GitHub 样式的 markdown 显示组件
* markdown 内代码高亮
* 为 markdown 扩展了百度云链接解析和优化显示
* 右键菜单组件
* 自定义滚动条和滚动控制
* 公用样式抽离，方便的主题定制
* 支持临时菜单配置
* 系统功能展示模块 `1.1.4 +`
* 多标签页模式 `1.1.4 +`
* 美化滚动条 `1.1.4 +`
* json view `1.1.4 +`
* cookie 封装 `1.1.5 +`
* 多标签页全局控制 API `1.1.5 +`
* 菜单全局控制 API `1.1.5 +`
* 多标签页关闭控制支持右键菜单 `1.1.10 +`
* 模块化全局状态管理 `1.2.0 +`
* 多种数据持久化方式：区分用户，区分路由，页面数据快照功能 `1.2.0 +`
* 支持跳出外部链接的菜单系统 `1.2.0 +`
* 支持菜单 svg 图标 `1.3.0 +`
* 日志记录和错误捕捉 `1.3.0 +`
* 全局菜单搜索 `1.3.0 +`
* 自定义登录重定向 `1.3.0 +`
* 切换全局基础组件尺寸 `1.4.0 +`
* 页面载入进度条 `1.4.1 +`
* 自适应的顶部菜单栏 `1.4.7 +`
* 数据导出 xslx 时支持合并单元格 `1.5.4 +`
* 多标签页支持拖拽排序 `1.8.0 +`
* 优化生产环境构建，首页只加载小于 60kb 的本地 js 代码 `1.8.0 +`
* 内置了构建文件体积检查工具 `1.8.0 +`
* 构建多页面示例 `1.23.0 +`
* 分包优化 `1.23.0 +`

## 其它同步仓库

| 位置 | 链接 |
| --- | --- |
| 码云 | [https://gitee.com/d2-projects/d2-admin](https://gitee.com/d2-projects/d2-admin) |
| coding | [https://d2-projects.coding.net/p/d2-projects/d/d2-admin/git](https://d2-projects.coding.net/p/d2-projects/d/d2-admin/git) |

> 如果您在 github 仓库下载很慢，可以尝试使用我们的码云仓库克隆代码

## 其它版本

| 名称 | 主页  | 预览 | 介绍 |
| --- | --- | --- | --- |
| 简化版模板 | [Github](https://github.com/d2-projects/d2-admin-start-kit) | [预览](https://d2.pub/d2-admin-start-kit/preview) | 无 |

## 开源后端实现

> 后端由开源社区贡献，不保证使用 D2Admin 最新版本，相关使用问题请联系其开源作者。

| 名称 | 技术 | 主页 | 预览 | 介绍 |
| --- | --- | --- | --- | --- |
| django-vue-admin-pro | Django | [Github](https://github.com/dvadmin-pro/django-vue-admin-pro) | [预览](http://demo.pro.django-vue-admin.com) | Django + Jwt + D2Admin |
| boot-admin | SpringBoot | [Github](https://github.com/hb0730/boot-admin) | [预览](http://admin.hb0730.com/) | 基于 SpringBoot 前后端分离的后台管理系统 |
| FlaskPermission | Flask | [Github](https://github.com/huguodong/flask-permission) | [预览](http://47.97.218.139:9999) | 基于 Python Flask 的权限管理 |
| CareyShop | ThinkPHP5 | [Github](https://github.com/dnyz520/careyshop-admin) | [预览](https://demo.careyshop.cn/admin/#/index) | 适用于 CareyShop 的高性能商城框架系统 |
| jiiiiiin-security | Spring Boot | [Github](https://github.com/Jiiiiiin/jiiiiiin-security) | [预览](https://github.com/Jiiiiiin/jiiiiiin-security) | 前后端分离的内容管理基础项目，注重用户权限管理功能 |
| Taroco | Spring Cloud | [Github](https://github.com/liuht777/Taroco) | [预览](http://111.231.192.110/) | 整套微服务企业级解决方案 |
| Aooms | Spring Cloud | [码云](https://gitee.com/cyb-javaer/Aooms) | [预览](https://www.yuboon.com/Aooms) | 极速微服务开发，不止像JFinal一样简单 |
| GOA | Beego | [Github](https://github.com/Qsnh/goa) | [预览](http://goaio.vip/) | 基于 Beego + Vue 开发的在线问答系统 |
| CMDB | Django | [Github](https://github.com/CJFJack/django_vue_cmdb) | [预览](https://mp.weixin.qq.com/s?__biz=MzU1OTYzODA4Mw==&mid=2247484250&idx=1&sn=981024ac0580d8a3eba95742bd32b268) | 分用户加载不同菜单和权限 |

## 社区项目

> 这些项目由开源社区贡献，不保证使用 D2Admin 最新版本，相关使用问题请联系其开源作者。

| 名称 | 主页 | 预览 | 介绍 |
| --- | --- | --- | --- |
| d2-admin-xiya-go-cms | [Github](https://github.com/d2-projects/d2-admin-xiya-go-cms) | [预览](https://d2.pub/d2-admin-xiya-go-cms/preview) | D2Admin + 权限系统 + 动态路由 |
| d2-advance | [Github](https://github.com/d2-projects/d2-advance) | [预览](https://d2.pub/d2-advance/preview) | 由 D2Admin 启发的技术探索 |
| d2-crud-plus | [Github](https://github.com/greper/d2-crud-plus) | [预览](http://qiniu.veryreader.com/D2CrudPlusExample/index.html) | 简化d2-crud配置，快速开发crud功能 |
| d2-crud | [Github](https://github.com/d2-projects/d2-crud) | [预览]() | 表格常用操作封装 |
| d2-admin-pm | [Github](https://github.com/wjkang/d2-admin-pm) | [预览](http://jaycewu.coding.me/d2-admin-pm) | 基于 D2Admin 的 RBAC 权限管理解决方案 |
| LanBlog | [Github](https://github.com/sinksmell/LanBlog) | [预览](http://47.101.222.133/) | Vue + Beego restful api 开发的懒人博客 |
| d2-admin-start-kit-plus | [Github](https://github.com/hank-cp/d2-admin-start-kit-plus) | [预览](https://github.com/hank-cp/d2-admin-start-kit-plus) | D2Admin 简化版模块化版本 |
| d2-ribbons | [Github](https://github.com/d2-projects/d2-ribbons) | [预览](https://github.com/d2-projects/d2-ribbons) | 开源项目徽标库 |

## 贡献

* [@FairyEver](https://github.com/FairyEver)
* [@sunhaoxiang](https://github.com/sunhaoxiang)
* [@Aysnine](https://github.com/Aysnine)
* [@luchaohai](https://github.com/luchaohai)
* [@han-feng](https://github.com/han-feng)
* [@rongxingsun](https://github.com/rongxingsun)
* [@dnyz520](https://github.com/dnyz520)

## 成为赞助者

[在 "爱发电" 上赞助我](https://afdian.net/@fairyever)

## 赞助

**cochlea** | **Baron** | **苦行僧** | **吴地安宁** | **KingDong** | **sunyongmofang**
