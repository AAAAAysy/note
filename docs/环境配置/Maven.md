# Maven配置

## 下载Maven

[Maven下载地址](https://maven.apache.org/download.cgi "Maven")

![](https://s2.loli.net/2023/02/21/ST2aYrFGNu8teCp.png)

## 环境变量

新建名为MAVEN_HOME的环境变量为Maven的文件夹路径

在Path变量新建%MAVEN_HOME%\bin

使用mvn -v 查看变量配置是否成功

![](https://s2.loli.net/2023/02/21/buNkUzm7JYfwhsj.png)

## 本地仓库与镜像源配置

打开conf/settings.xml文件

找到localRepository将其注释取消并设置本地仓库路径

~~~xml
<localRepository>本地仓库路径</localRepository>
~~~

在mirrors中添加

~~~xml
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
~~~

## idea配置

![](https://s2.loli.net/2023/02/21/th2LlGVJBCadqYA.png)