   var scrollFunc = function (e) {
        var direct = 0;
        e = e || window.event;
        if (e.wheelDelta) {  //�ж������IE���ȸ軬���¼�             
            if (e.wheelDelta > 0) { //���������Ϲ���ʱ
                alert("�������Ϲ���");
            }
            if (e.wheelDelta < 0) { //���������¹���ʱ
                alert("�������¹���");
            }
        } else if (e.detail) {  //Firefox�����¼�
            if (e.detail> 0) { //���������Ϲ���ʱ
                alert("�������Ϲ���");
            }
            if (e.detail< 0) { //���������¹���ʱ
                alert("�������¹���");
            }
        }
        ScrollText(direct);
    }
    //��ҳ��󶨻��ֹ����¼�
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //�������ִ���scrollFunc����
    window.onmousewheel = document.onmousewheel = scrollFunc;  
