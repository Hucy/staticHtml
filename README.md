# 关于
使用gulp将less文件生成的css文件和js用内联方式写入一个html文件中。支持浏览器自动刷新
# 用法
1. clone代码

    ```bash
    git clone https://github.com/Hucy/staticHtml.git
    ```

2. 进入staticHtml文件夹

    ```bash
    cd staticHtml
    ```
3. 安装依赖

    ```bash
    npm install
    ```
4. 执行脚本，这时候会打开浏览器localhost：3000,每次保存文件都会刷新浏览器。

    ```bash
    npm start
    ```
5. 当页面完成后生成一个html文件，css和js以内联的方式写入，生成文件在`out`文件夹下。

    ```
    npm run build
    ```
# 结束
简单的套用gulp插件。