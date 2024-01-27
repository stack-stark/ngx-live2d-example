@echo off

rem 启动npm run build命令
@REM start npm run build

rem 等待npm run build命令执行完毕
@REM wait 100

rem 创建app-dist文件夹
mkdir app-dist

rem 将nginx.conf文件复制到app-dist文件夹
copy nginx.conf app-dist

rem 将dockerfile文件复制到app-dist文件夹
copy dockerfile app-dist

rem 将./dist/ngx-live2d-example/browser/*文件复制到app-dist文件夹
xcopy ./dist/ngx-live2d-example/browser/ app-dist /s /e

rem 打包app-dist文件夹为压缩包
7z a app-dist.zip app-dist

rem 删除app-dist文件夹
rmdir /s /q app-dist
