let html = document.getElementById('html')
// 写样式
let style = document.querySelector('#style')
let string = `
/*你好，我是一名前端切图狗
接下来我要加样式了
首先加一个div
我要加的样式是*/
#div1{
    width:30rem;
    height:30rem;
}
/*
接下来我吧div变成一个八卦
注意看好了
首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border:none;
}
/*
八卦是阴阳两极之相
我们先绘制一下阴阳两极
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, 
    rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, 
    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
两仪成
*/
#div1::before {
    width:15rem;
    height:15rem;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width:15rem;
    height:15rem;
    bottom:0px;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
/*
太极起
*/
@keyframes rotate {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
}
#div1{
    animation: rotate 3s linear infinite;
}
`;
let string2 = ''
// 这个replace只会把第一个回车变成换行
// 我们要用到正则表达式了
// 然后又发现了一个bug 他会打出<来
// string=string.replace(/\n/g,"<br>")
let n = 0
// 通过setTimeout模拟了setInterval
// 这样做的好处是可以随时停止
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            // 如果是空格
            string2 += '&nbsp'
        } else {
            // 如果不是回车就照搬
            string2 += string[n]
        }
        html.innerHTML = string2   
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0,9999)
        html.scrollTo(0,9999)
        if (n < string.length - 1) {
            // 不是最后一个
            step();
            n++
        } else { }
    }, 50)
}
step()
