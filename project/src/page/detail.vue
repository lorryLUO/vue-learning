<template>
	<div id="detail" v-if="detail">
		<div class="cover"><img :src="detail.cover.origin" alt=""></div>
		<div class="desc">
			<div class="title">影片简介</div>
			<div class="info">
				<p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{detail.director}}</p>
				<p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span v-for='item in detail.actors'>{{item.name}}</span></p>
				<p>地区语言：{{detail.nation}}({{detail.language}})</p>
				<p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{detail.category}}</p>
				<p>上映日期：{{detail.premiereAt|getDay}}</p>
				<p class="p">{{detail.synopsis}}</p>
			</div>
		</div>
		<router-link v-if="detail.isNowPlaying" :to="{name:'cinema',params:{id:detail.id}}" class="go-pay">立即购票</router-link>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created: function() {
    // if(!this.detail){
    let id = this.$route.params.id;
    this.$store.dispatch("getFilmDetail", id);
    // }
  },
  filters: {
    getDay: function(time) {
      let date = new Date(time * 1),
        year = date.getFullYear(),
        month =
          date.getMonth() + 1 > 9
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1),
        day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();

      return year + "-" + month + "-" + day;
    }
  },
  computed: mapGetters({
    detail: "getFilmDetail"
  })
};
</script>

<style lang="less" scoped>
@import "../style/common.less";
#detail {
}
.cover {
  img {
    width: 100%;
  }
}
.desc {
  font-size: 13*@px;
  line-height: 230%;
  padding: 15*@px;
  .title {
    border-left: 16*@px solid #e4c89c;
    font-size: 16*@px;
    padding-left: 5*@px;
    margin-bottom: 20*@px;
    margin-left: -15*@px;
  }

  .info {
      p{
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
 
           span{
               display: inline-block;
					margin-right: 1*@px;
					&:after{
                      content: "|";
                    }
						
					&:last-child:after {
                       content: "";
                    }
						
           }
           p{
 line-height: 150%;
                    margin-top: 5*@px;
           }
      }
  }
					
}
.go-pay{
width: 160*@px;
		height: 35*@px;
		background: #e38700;
		border-radius: 35*@px;
		line-height: 35*@px;
		color: #fff;
		text-align: center;
		font-size: 14*@px;
		margin: 10*@px auto;
		display: bloc;
}
		
</style>