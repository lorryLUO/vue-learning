<template>
	<div>
        <banner></banner>
		<div class="now-playing">
			<div class="item" v-for='item in nowplay'>
				<router-link :to="{name:'detail',params:{id:item.id}}">
				   <img :src="item.cover.origin" alt="">
					<div class="desc">
						<div class="info"> 
							<h4>{{item.name}}</h4>
							<p>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
						</div>
						<div class="count">{{item.grade}}</div>
					</div>
					{{item.key}}
				</router-link>
			</div>
			<router-link :to="{name:'film',params:{type:'now-playing'}}" class="go-more">
				更多热映电影
			</router-link>
		</div>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import api from "@/api/getData";
import banner from "@/components/banner";

export default {
  data() {
    return {};
  },
  created: function() {
    if (this.nowplay.length == 0) {
      this.$store.dispatch("getNowPlaying");
    }
  },
  computed: {
    ...mapGetters({
      nowplay: "getNowPlayList"
    })
  },
  components: {
    banner
  }
};
</script>

<style lang="less" scoped>
@import "../style/common.less";
.now-playing,
.coming-soon {
  padding: 15*@px;
  .item {
    background: #f9f9f9;
    margin-bottom: 15*@px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  }
}

img {
  width: 100%;
}

.info {
  font-size: 12*@px;
  font-weight: 100;
  p {
    font-size: 15*@px;
    color: #9a9a9a;
  }
}

.count {
  color: #f78360;
  font-weight: 500;
}

.time {
  font-size: 12*@px;
  color: #f78360;
}
</style>