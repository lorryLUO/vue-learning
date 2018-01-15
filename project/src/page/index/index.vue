<template>
	<div class="wrap" v-scroll="showTop">
        <com-header :com="comConf"></com-header>
        <div class="container">
            <transition name = "fade"> 
                <router-view class="child-view" />
            </transition>
        </div>
  </div>
</template>

<script>
	import { mapActions, mapState ,mapGetters } from 'vuex'
	import api from '@/api/getData'
    import Header from '@/components/header'

	export default {
		data() {
			return {
				
			}
        },
        created:function(){
            return this.$router.push('index/home')
        },
       computed:mapGetters({
            comConf:'comConf',
            loading:'loading'
        }),
        components: {
            comHeader:Header
        },
        methods: {
            showTop :() => {
                if(document.body.scrollTop>200){
                    this.goTop = true
                }else{
                  this.goTop = false
                }
            }
        }
	}
</script>

<style lang="less" scoped>
	.container{
        padding-top: 50px;
    }
</style>