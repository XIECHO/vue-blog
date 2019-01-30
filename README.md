# vue-blog

## 基于 vue + express + mongoDB ，已上线


### 页面整理

- 用户页面
  - [首页](https://blog.yuanaaa.top)
  - [文章页面](https://blog.yuanaaa.top/user/article/5c4867bda955881f515f11a4)
  - [关于页面](https://blog.yuanaaa.top/user/about)
  - [归档页面](https://blog.yuanaaa.top/user/archived)
  - [404页面](https://blog.yuanaaa.top/aa)


- 后台页面
  - 验证页面
  - 后台首页 (文章管理页面)
  - 图片管理页面
  - 新增文章页面

> - 19/1/13 新增后台测试账号，用户名：test , 密码：123456；
- 该账号只提供预览后台，无操作权限
- 后台进入方式
 - 1、[URL进入](https://blog.yuanaaa.top/admin)
 - 2、通过点击用户页面导航条下图红框区域隐藏导航进入
 - ![img](https://i.loli.net/2019/01/30/5c51801f4e3a1.png)

### 数据分类

- 文章数据
  - title: 标题
  - date：文章创建时间
  - lastDate: 最后编辑时间
  - tags: 标签
  - readCount：阅读量
  - abstract：摘要
  - content：内容
  - mdContent：内容的 md 格式
  - type: 是否私密（发布草稿）


### 进度

#### 静态

- 用户
  - 头部 √
  - 导航 √
  - 文章列表 √
  - 底部 √
  - 文章页面 √
  - 归档页面 √
  - 标签归档页 √
  - 关于页面 √

- 后台
  - 登录页面 √
  - 管理页面 √
  - 新建文章页面 √
  - 图片管理页面 √

#### 功能

- 导航 √
- 阅读量 √
- 归档时间轴 √
- 文章修改 √
- 文章类型转换 √
- 文章删除 √
- 文章编辑时 md 输入框与预览框同步滚动 √
- 标签分类 √
- 图床接口接入及图片管理 √
- 评论


