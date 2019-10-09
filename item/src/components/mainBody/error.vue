<template>
    <div class="error">
        <div>
            <h1>你访问的页面不存在了！！！</h1>
            <p>可能的原因：</p>
            <p>&nbsp;1、手抖打错了</p>
            <p>&nbsp;2、作者太懒了，还没制作</p>
        </div>
        <img src="../../assets/3.jpeg" alt="">

    </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped lang="less">
    .error{
        width: 100%;
        height: 85vh;
        position: relative;
        overflow: hidden;
        &>div{
            position: absolute;
            top: 40%;
            left: 25%;
        }
        img{
            position: absolute;
            right: 15%;
            top: 10%;
        }
    }
</style>