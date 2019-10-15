<template>
    <div id="cssShowOne">
        <img src="./../assets/meinv.jpg">
        <div class="container"></div>
    </div>
</template>

<script>
    export default {
        name: "cssShowOne"
    }
</script>

<style scoped lang="less">

    #cssShowOne{
        position: relative;
        img{
            width: 200px;
            height: 200px;
            display: inline-block;
        }
        .container{
            position: absolute;
            top: 0;
            left: 0;
            height: 200px;
            width: 200px;
            background: linear-gradient(#03A9F4,#03A9F4),
                    linear-gradient(to right, #ffffff33 1px,transparent 2px),
                    linear-gradient(#ffffff33 1px,transparent 2px),
                    linear-gradient(transparent,#2196f387);
            background-size: 100% 2%,10% 100%,100% 10%,100% 100%;
            background-repeat: no-repeat,repeat,repeat,no-repeat;
            background-position: 0 0,0 0,0 0,0 0;
            clip-path: polygon(0% 0%,100% 0%,100% 2%,0% 2%);
            animation: moveDown 2s linear infinite;
        }
    }
    @keyframes moveDown {
        to{
            background-position: 0 100%,0 0,0 0,0 0;
            clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 100%);
        }
    }

</style>