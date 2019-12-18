<template>
    <div id="cssShowThree">
        <div class="color-changer">
            <input type="color" value="#ff6666">
            <!--<img src="https://yangzw.vip/static/codepen/car.jpg">-->
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571829843547&di=4267a6ae3ca7670a69f7ff7865c620cf&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F09%2F25%2F163bc7fcf0cee0a4f87a2a50be45471c.jpg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "cssShowThree"
    }
</script>

<style scoped lang="less">
    #cssShowThree{
        padding-left: 50px;
        .color-changer {
            overflow: hidden;
            position: relative;
            height: 100%;
            input {
                position: absolute;
                width: 50%;
                height: 50%;
                cursor: pointer;
                mix-blend-mode: hue;
            }
            img {
                width: 50%;
                height: 50%;
                object-fit: cover;
            }
        }
    }
</style>