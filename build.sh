content="<style>*{line-height: 1.5;}</style><ol>"
for shname in `find ./demo -name "*.html"`
do
  name=`echo "<li><a href=\""$shname"\"
  target=\"_blank\">$shname</a></li>"`
  content=${content}${name}
done
content=${content}"</ol>"
echo ${content} > index.html
echo "build success!"
