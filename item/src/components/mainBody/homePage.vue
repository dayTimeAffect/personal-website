<template>
    <div class="box">
        <Carousel autoplay loop arrow="always" class="carousel" :autoplay-speed="autoSpeed">
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../../assets/s1.jpg" alt="" style="display: block">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../../assets/s2.jpg" alt="" style="display: block">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../../assets/s3.jpg" alt="" style="display: block">
                </div>
            </CarouselItem>
        </Carousel>
        <div class="box-content">
            <h3 style="font-size: 40px" class="title">Welcome</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homePage",
        data(){
            return {
                autoSpeed:4000,
            }
        }
    }
</script>

<style scoped lang="less">
    .box {
        font-family: 'Ubuntu', sans-serif;
        overflow: hidden;
        position: relative;
        transition: all 0.3s;
        &:hover{
            box-shadow: 0 0 15px -5px #000;
        }
        &:hover img{
            filter: blur(2px);
        }
        &:hover .box-content{
            top: 0;
        }
        .carousel{
            .demo-carousel{
                img{
                    width: 100%;
                    height: 920px;
                    cursor: pointer;
                    transition: all 0.3s ease 0s;
                }
            }
        }
        .box-content{
            color: #fff;
            background-color: rgba(0,0,0,0.6);
            text-align: center;
            width: 100%;
            height: 59%;
            padding: 18% 0 0 0;
            position: absolute;
            left: 0;
            top: -100%;
            z-index: 2;
            transition: all 0.3s ease 0s;
        }
    }
</style>