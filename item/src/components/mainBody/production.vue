<template>
    <div id="production">
        <div>
            <ul>
                <li>人脸识别时用到的扫描图</li>
                <li>立体感按钮</li>
            </ul>
        </div>
        <cssShowOne></cssShowOne>
        <cssShowTwo></cssShowTwo>
    </div>
</template>

<script>
    import cssShowOne from './../../cssShowComponents/cssShowOne'
    import cssShowTwo from './../../cssShowComponents/cssShowTwo'
    export default {
        name: "production",
        components:{
            cssShowOne:cssShowOne,
            cssShowTwo:cssShowTwo,
        }
    }
</script>

<style scoped>

</style>