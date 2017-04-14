/**
 * Created by bjwsl-001 on 2017/4/11.
 */
jQuery.fn.carousel=function(){


    var interval=3000;                  //每隔多久轮换一张
    var duration=500;                   //每次轮换动画的持续时间
    var $imgList=this.children('img')   //所有img组成的类数组对象
    var $liList=this.find('li')         //所有li组成的类数组对象
    var cur=0;                           //当前显示的广告序号
    var next=1;                           //下次即将要显示的广告序号
    //开启一个定时器，每个interval时长启动一次轮换
    setInterval(function(){
        lunHuan();


    },interval);


    $liList.click(function(){
        var i=$liList.index(this);
        next=i;
        lunHuan();
    })


    function lunHuan(){
        //让第next个li圆饼添加.active；其兄弟删除.active
        $liList.eq(next).addClass('active').siblings('.active').removeClass('active');
        console.log(next);
        //当前图片启动动画向左移出去，并且删除其active属性
        $imgList.eq(cur).animate({left:'-100%'},duration,                   function(){
                $(this).removeClass('active');
    });
        //下一张图片添加active属性，并且出现在最右侧，启动动画慢慢想左移动；
        $imgList.eq(next).addClass('active').css('left','100%').animate({left:'0'},duration);
        //修改cur 和next 的值，具体就是将next值赋给cur ，next+1；如果next大于等于当前引用对象类数组的length，值就为0；
        cur=next;
        next++;
        if(next>=$imgList.length){
            next=0;
        }
    }
};



jQuery.fn.scrollspy=function(options){
    var $liList=$(options.target).find('li');
    $liList.on('click','a',(function(e){
        e.preventDefault();
            $('body').animate({scrollTop:'800'},500);
    })
    )
}