 #!/bin/bash   
    #将文件写入可以上线的目录下
	project_path=$(cd `dirname $0`; pwd) 
        echo $project_path # 获取当前路径
    
	if test -e $project_path/dist #判断该文件是否存在
	then
		echo 'ok!'
		a=$(cp -r $project_path/dist/* F:/nginx/html-nginx/html-nginx/appH5/freepush)
		echo $a
	else
		echo 'not!'
	fi 
        sleep 100
