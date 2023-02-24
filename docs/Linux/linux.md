# Linux服务

## SSH

### 开启服务

基于ubuntu

```shell
sudo apt install openssh-server
sudo systemctl status ssh
sudo ufw allow ssh
```

## FTP

### 开启服务

下载vsftpd

~~~shell
sudo apt-get install vsftpd
~~~

编辑配置

~~~shell
sudo vi /etc/vsftpd.conf
~~~

找到如下两行取消注释

~~~shell
local_enable=YES
write_enable=YES
~~~

重启ftp服务

~~~shell
systemctl restart vsftpd
~~~

### 连接服务

使用PsFTP连接到服务器

~~~shell
open 192.168.1.1
~~~

### 常用命令

get:下载文件

put:上传文件

mget:下载多个文件

mput:上传多个文件

使用r参数来上传或下载文件夹

!:执行本地shell命令，如:!dir（显示本机当亲目录内容），如果不加！如：dir（显示服务器当前目录内容）

ftp中用lcd切换本地路径，用cd切换远程服务器的路径。常用到的命令如下：

cd目录名（进入服务器目录）   lcd目录名（进入本机目录）

cd \（退到服务器根目录）    lcd \（退到本机根目录）

cd ..（退回到上一级目录）   lcd ..（退回到上一级目录）



