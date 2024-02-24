# 关于我

崔丛昆，一名偏前端的全栈，我精通 JavaScript，并熟练使用 React 和 Vue 来构建响应迅速且用户友好的前端界面。在后端方面，我具有 Node.js 和 Express 框架的实战经验，对 ProgresSQL、MySQL 和 MongoDB 数据库比较了解。

您可以通过我的个人网站 [kenjiginjo.com](https://kenjiginjo.com) 了解更多关于我的信息。

# 关于这个项目

您可以直接访问 http://localhost:3000/analysis/1522/report/eps 来查看这个项目，也可以部署到本地来查看。

很感激您能给我这个机会，我很珍惜这次机会，这个项目我秉着尽力做到最好的态度来完成，耗费的时间有些久（15 个小时左右 😅），但是我认为这是值得的，我在这个项目中学到了很多新的知识，也对一些知识有了更深的理解。

这个项目我采用了 Next.js 来构建，使用了 React 和 TypeScript 来编写代码，使用了 Tailwind CSS 来构建界面，使用了 SWR 来处理数据请求，使用了 Jest 来编写测试用例，使用了 ESLint 和 Prettier 来保证代码质量。

# 项目中的一些亮点

- 虽然我没有使用 tailwindcss 来构建界面，但是我使用了 tailwindcss 的一些工具类来构建界面，我对 tailwindcss 是有一些了解的
- 对于 SEO，我[src/app/layout.tsx]中优化页面的标题和描述
- 我使用了 api contract 来定义接口的返回值，这样可以更好的维护接口
- 我使用 MUI UI 组件库来构建界面，并设置了[light]和[dark]主题配置，加在完成在屏幕右下角技能切换，并将统一的样式抽离到了[src/styles]中
- 我梳理的参考网站【财报狗】的 analysis 相关所有的路由，然后将其抽象成了一个路由配置文件[src/routes]，这样可以更好的维护路由
- 针对 MENU 的 渲染我采用了服务端渲染，所有的 a 标签都是在服务端渲染的，这样可以更好的 SEO
- 搜索部分我采用了 debounce 来处理，这样可以减少请求次数，同时做了 react query 的缓存处理
- 我设计了[src/providers/ComposeProviders.tsx]来统一管理全局的 Provider
- 我设计了 [AnalysisLayout] 和[Applayout]分别来处理不同的布局
- MUI Material 的组件都比较厚重，不太适合我们的题目，所以大部分的组件，我都是自己写的。
- 正好有 技术面的台股总览的 csv 文件，我也模拟了一下数据请求，然后做了一些处理，然后展示到了页面上[db/index.ts]
- 我使用了 Jest 来编写测试用例，但是由于时间关系，我只写了一个测试用例，但是我认为这个测试用例可以说明我是有测试的意识的

## 项目中的一些问题

- 图表中的 XAxis 并未能预期实现到 不重复的年份而且是按准确平均粒度分配的 理想的状态是 2019 2020 2021 2022，但现在 recharts 它自动分类成了 2019 2019 2020 2021 2022，这个问题我没有解决。
- 我没有做到测试多个分辨率的适配测试，这个我没有做（并不是手机版）。
- 明暗主题我没有做到所有的组件都支持，只是做了部分的组件支持。
- 通过这次的测验，我发现自己对与 React 生态的一些库的使用还是不够熟练，比如 recharts，react query 以及新版本的 nextjs app router 模式我对于它门的使用还是不够熟练，这个我需要加强。

## Getting Started

1. Install `nvm` then `node` & `npm`: `brew install nvm && nvm install`
2. Run `nvm use`, this will use the version of `node` specified in the `.nvmrc` file
3. Install dependencies: `npm install`, this will install all the dependencies for the project
4. Change Your [finmindtrade.com](https://finmindtrade.com/analysis/#/data/api) Token `FINMINDTRADE_TOKEN = 123 `. Run `cp .env.example .env`
5. Run `npm run dev` to start the development server.

You can use any IDE or code editing tool for developing on any platform. Use your favorite!

## Recommended `node` setup

In order to have more consistent builds, we use a strict `node` and `npm` version as defined in the `package.json` `engines` field and `.nvmrc` file. `npm install` will fail if you do not use the version defined, so it is recommended to install `node` via `nvm` for easy node version management. Automatic `node` version switching can be installed for [`zsh`](https://github.com/nvm-sh/nvm#zsh) or [`bash`](https://github.com/nvm-sh/nvm#bash) using `nvm`.

##
