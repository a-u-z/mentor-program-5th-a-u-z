if [ "${1}" == "" ]; then
	echo "請輸入參數"
elif [ "${1}" -ge 1 ]; then
	for (( i=1; i<=${1}; i++ ))
	do
		touch "${i}.js";
	done
		echo "檔案建立完成"
else 
	echo '參數有誤'
fi
# http://linux.vbird.org/linux_basic/0340bashshell-scripts.php#for