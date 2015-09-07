 <!--
// 画像がクリックされたら画像を入れ替える
// img0.jpg,img1.jpgなどの数字が続いたファイルを複数用意します。
num = 5; // 入れ替える画像の枚数(最初の画像も含める)
nme = "img/img" // 画像のディレクトリとファイル名の数字と拡張子より前の部分
exp = "jpg" // 拡張子
cnt = 0;
function changeImage() {
   cnt++;
   cnt %= num;
   document.img.src = nme + cnt + "." + exp;
}
 //-->
