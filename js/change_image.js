 <!--
// �摜���N���b�N���ꂽ��摜�����ւ���
// img0.jpg,img1.jpg�Ȃǂ̐������������t�@�C���𕡐��p�ӂ��܂��B
num = 5; // ����ւ���摜�̖���(�ŏ��̉摜���܂߂�)
nme = "img/img" // �摜�̃f�B���N�g���ƃt�@�C�����̐����Ɗg���q���O�̕���
exp = "jpg" // �g���q
cnt = 0;
function changeImage() {
   cnt++;
   cnt %= num;
   document.img.src = nme + cnt + "." + exp;
}
 //-->
