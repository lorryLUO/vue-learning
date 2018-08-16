<template>
   <canvas></canvas>
</template>

<script>
	export default {
		data() {
			return {
			}
        },
        created(){
		},
        mounted(){
           
           let canvas = this.$el;
        //    canvas.width = screen.width;
        //    canvas.height = 300;
           let context = canvas.getContext('2d');
            context.font="12px Arial"; 
            for(let i = 0;i<3;i++){
               
            }
            // 1
            context.beginPath();
            context.arc(7,50,5,0,2*Math.PI);
            context.fillStyle = "#17adcb";
            context.strokeStyle= "#17adcb";
            context.closePath();
            context.fill();
            context.stroke();
            
            context.fillStyle = "#cfd3d6"; 
            context.fillText("开始认购",0,30);
            context.fillStyle = "#8998a9";
            context.fillText("2018-03-02",0,82);
            context.moveTo(14,51); 
            context.lineTo(80,51);
            context.closePath();
            context.strokeStyle= "#17adcb";
            context.stroke();


// 2
            context.beginPath();
            context.arc(87,50,5,0,2*Math.PI);
            context.fillStyle = "#17adcb";
            context.strokeStyle= "#17adcb";
            context.closePath();
            context.fill();
            context.stroke();

            context.beginPath();
            context.fillStyle = "#cfd3d6";
            context.fillText("公布中签",70,30);
            context.fillStyle = "#8998a9";
            context.fillText("2018-03-14",70,82);
            context.moveTo(94,51); 
            context.lineTo(160,51);
            context.closePath();
            context.strokeStyle= "#506276";
            context.stroke();
// 3
            context.beginPath();
            context.arc(167,50,5,0,2*Math.PI);
            context.fillStyle = "#506276";
            context.strokeStyle= "#506276";
            context.closePath();
            context.fill();

            context.beginPath();
            context.fillStyle = "#cfd3d6";
            context.fillText("上市",155,30);
            context.fillStyle = "#8998a9";
            context.fillText("2018-03-20",140,82);
            context.moveTo(174,51); 
            context.lineTo(244,51);
            context.closePath();
            context.strokeStyle= "#506276";
            context.stroke();
       // 4
            context.beginPath();
            context.arc(251,50,5,0,2*Math.PI);
            context.fillStyle = "#506276";
            context.strokeStyle= "#506276";
            context.closePath();
            context.fill();

            context.beginPath();
            context.fillStyle = "#cfd3d6";
            context.fillText("上市",240,30);
            context.fillStyle = "#8998a9";
            context.fillText("2018-03-20",220,82);
            context.closePath();
            context.strokeStyle= "#506276";
            context.stroke();
        }
	}
</script>

<style lang="less" scoped>
	
</style>