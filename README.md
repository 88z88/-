

## 智能家居项目
### 1. 项目构成

智能家居项目采用基础的 JavaScript + WXSS + ESLint 进行构建，降低了使用门槛。

项目目录结构如下：

```
|-- Intefurn
    |-- README.md
    |-- app.js
    |-- app.json
    |-- app.wxss
    |-- components	//	公共组件库
    |-- config	//	基础配置
    |-- custom-tab-bar	//	自定义 tabbar
    |-- model	//	mock 数据
    |-- pages
    |   |-- home	//	主页面
    |   |-- roomdetail	//	生成图片查看界面
    |   |-- usercenter	//	个人中心及收货地址相关页面
    |-- services	//	请求接口
    |-- style	//	公共样式与iconfont
    |-- utils	//	工具库
```

### 2. 添加新页面

1. 在 `pages `目录下创建对应的页面文件夹
2. 在 `app.json` 文件中的 ` "pages"` 数组中加上页面路径
3. [可选] 在 `project.config.json` 文件的 `"miniprogram-list"` 下添加页面配置

## 3. hammer: 构建运行

1. `npm install`
2. 小程序开发工具中引入工程
3. 构建 npm

## 4. art: 代码风格控制

`eslint` `prettier`

## 5. iphone: 基础库版本

最低基础库版本`^2.6.5`
