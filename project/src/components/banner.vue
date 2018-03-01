<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides  @someSwiperEvent="callback"-->
            <swiper-slide class='slide' v-for="(item, index) in banner" :key="index">
                <a target="_blank" href="item.key">
                     <img :src="item.key" alt="banner" title="图片">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                }
			}
        },
        created(){
			console.log(this.banner)
		},
        components: {
            swiper,
            swiperSlide
        },
        computed: {
             ...mapGetters({
                banner:'getBannerList',
             }),
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
	}
</script>

<style lang="less" scoped>
	.el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
     .swiper-inner {
        position: relative;
        overflow: hidden;
        height: 330px;
        padding: 15px;
        
    }
    .swiper-container {
        height: 210px;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>