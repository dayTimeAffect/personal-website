<template>
    <div id="cssShowFour">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "cssShowFour"
    }
</script>

<style scoped lang="less">
    .bg_li(@index){
        background-color: #123458 * @index;
        opacity: 0.5;
    }
    #cssShowFour{
        padding-left: 50px;
        ul{
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotate 5s infinite linear;
            transform-origin: center center;
            li{
                font-size: 50px;
                color: white;
                font-weight: 800;
                position: absolute;
                width: 200px;
                height: 200px;
                text-align: center;
                line-height: 200px;

                &:nth-child(1){
                    .bg_li(1);
                    transform: translateX(-100px) rotateY(-90deg);
                }
                &:nth-child(2){
                    .bg_li(2);
                    transform: translateX(100px) rotateY(90deg);
                }
                &:nth-child(3){
                    .bg_li(3);
                    transform: translateY(-100px) rotateX(90deg);
                }
                &:nth-child(4){
                    .bg_li(4);
                    transform: translateY(100px) rotateX(-90deg);
                }
                &:nth-child(5){
                    .bg_li(5);
                    transform: translateZ(-100px);
                }
                &:nth-child(6){
                    .bg_li(6);
                    transform: translateZ(100px);
                }
            }
        }
    }
    @keyframes rotate {
        from {
            transform: rotateY(0) rotateX(0);
        }
        to {
            transform: rotateY(-1turn) rotateX(-1turn);
        }
    }
</style>