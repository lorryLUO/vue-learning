<template>
  <canvas></canvas>
</template>
<style>
/*  body{
    background-color: #000
  }*/
/*  canvas{
    width: 100%
  }*/
</style> 
<script type = "text/ecmascript-6">
  // import pointImg from './img/pointImg.png'
  export default {
    props: {
      width: {
        type: [String, Number],
        default: ''
      },
      height: {
        type: [String, Number],
        default: ''
      },
      curVal: {
        type: [Array],
        default () {
          return [{
            num: 200,
            unit: '单位',
            val: ''
          }, {
            num: 500,
            unit: '单位',
            val: ''
          }]
        }
      },
      maxVal: {
        type: [Number],
        default: 300
      },
      abscissa: {
        type: [Object],
        default () {
          return {
            start: {
              type: [Number],
              default: 20
            },
            end: {
              type: [Number],
              default: 600
            },
            unit: 'Km',
            segmentL: 10
          }
        }
      },
      text: {
        type: [Boolean],
        default: true
      }
    },
    watch: {
      curVal () {
        this.init()
      },
      abscissa () {
        this.init()
      },
      maxVal () {
        this.init()
      }
    },
    data () {
      return {
        cxt: null
      }
    },
    created() {
      var lastTime = 0
      var vendors = ['webkit', 'moz']
      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
      }
      if (!window.requestAnimationFrame) { 
        window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime()
          var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
          var id = window.setTimeout(function() {
              callback(currTime + timeToCall)
          }, timeToCall)
          lastTime = currTime + timeToCall
          return id
        }
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id)
        }
      }
    },
    methods: {
      drawDashedLine(context, x1, y1, x2, y2, dashLength) {
        context.strokeStyle = '#2a71d4'
        dashLength = dashLength === undefined ? 5 : dashLength
        let deltaX = x2 - x1
        let deltaY = y2 - y1
        let numDashes = Math.floor(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength)
        for (let i = 0; i < numDashes; ++i) {
            context[i % 2 === 0 ? 'moveTo' : 'lineTo'](x1 + (deltaX / numDashes) * i, y1 + (deltaY / numDashes) * i)
        }
      },
      coordinateX({
        cxt,
        segmentL = 5,
        w = 500,
        h = 500,
        color = '#ccc',
        lineWidth = 1,
        text
      }) {
        this.setLine({
          cxt,
          color: color,
          moveTo: {
            x: 0,
            y: this.text ? h - 50 : h
          },
          lineTo: {
            x: w,
            y: this.text ? h - 50 : h
          }
        })
        let spacing = w / segmentL
        if (this.text) {
          let text = [this.abscissa.start, this.abscissa.end]
          // console.log(text)
          for (let i = 0; i < text.length; i++) {
            this.setText({
              cxt,
              text: text[i] + this.abscissa.unit,
              color: '#a5a5a5',
              font: '24px Arial',
              x: i === 0 ? spacing : w - spacing,
              y: h - 14
            })
          }
        }
        // for (let i = 1; i < segmentL; i++) {
        //   this.setLine({
        //     cxt,
        //     color: color,
        //     moveTo: {
        //       x: spacing * i,
        //       y: this.text ? h - 70 : h - 20
        //     },
        //     lineTo: {
        //       x: spacing * i,
        //       y: this.text ? h - 50 : h
        //     }
        //   })
        // }
      },
      setText({
        cxt,
        text = '字呢？？',
        font = '28px Arial',
        color = '#fff',
        textAlign = 'center',
        x = 0,
        y = 0
      }) {
        cxt.beginPath()
        cxt.font = font
        cxt.fillStyle = color
        cxt.textAlign = textAlign
        cxt.textBaseline = 'middle'
        cxt.fillText(text, x, y)
        cxt.stroke()
      },
      setLine({
        cxt,
        color = '#fff',
        lineWidth = 1,
        rotate = 0,
        moveTo = {
          x: 0,
          y: 10
        },
        lineTo = {
          x: 0,
          y: 90
        }
      }) {
        cxt.beginPath()
        cxt.rotate(rotate)
        cxt.strokeStyle = color
        cxt.lineWidth = lineWidth
        cxt.moveTo(moveTo.x, moveTo.y)
        cxt.lineTo(lineTo.x, lineTo.y)
        cxt.stroke()
      },
      setArc: ({
        cxt,
        isFill,
        isStroke,
        lineWidth,
        strokeStyle,
        fillStyle,
        arc = {
          x: 0,
          y: 0,
          r: 10,
          sAngle: 0,
          eAngle: 2
        }
      }) => {
        cxt.beginPath()
        lineWidth && (cxt.lineWidth = lineWidth)
        strokeStyle && (cxt.strokeStyle = strokeStyle)
        fillStyle && (cxt.fillStyle = fillStyle)
        cxt.arc(arc.x, arc.y, arc.r, arc.sAngle, arc.eAngle)
        isFill && cxt.fill()
        isStroke && cxt.stroke()
      },
      setTextPosition ({
        cxt,
        text,
        fontSize = 30,
        coordinate
      }) {
        cxt.save()
        //  font = '28px Arial',
        cxt.font = fontSize + 'px Arial'
        console.log(cxt.measureText(text).width)
        console.log(text)
        console.log(this.width)
        console.log('x' + coordinate.x)
        console.log('textWidth' + cxt.measureText(text).width * 0.5)
        // console.log('diffValEnd' + parseInt(coordinate.x) + parseInt(cxt.measureText(text).width) * 0.5)
        // console.log('diffValStart' + parseInt(coordinate.x) - parseInt(cxt.measureText(text).width) * 0.5)
        console.log('width' + cxt.measureText(text).width)
        let diffValEnd = coordinate.x + cxt.measureText(text).width * 0.5
        let diffValStart = coordinate.x - cxt.measureText(text).width * 0.5
        console.log(diffValEnd)
        cxt.restore()
        console.log(diffValEnd > this.width)
        if (diffValEnd > this.width) {
          console.log(diffValEnd - this.width)
          return diffValEnd - this.width + 8
        } else if (diffValStart < 0) {
          console.log(diffValStart)
          return diffValStart - 6
        } else {
          return 0
        }
        // return cxt.measureText(text).width
      },
      init () {
        let cxt = this.cxt
        let width = this.width
        let height = this.height
        let segmentL = this.abscissa.segmentL
        let spacing = this.width / segmentL
        let start = this.abscissa.start
        let end = this.abscissa.end
        // cxt.clearRect(0,0,d+1,d);
        cxt.clearRect(0, 0, width, height)
        // cxt.translate(0, 65)
        this.coordinateX({
          cxt,
          w: width,
          h: height,
          start,
          end,
          segmentL: this.abscissa.segmentL
        })
        let annotated = (cxt, Xaxis, Yaxis, num, unit, val) => {
        // let mAngle = Math.PI * 2 / 3
          cxt.save()
          let X = Xaxis - 11
          let Y = Yaxis + 44
          cxt.translate(X, Y)
          cxt.beginPath()
          cxt.fillStyle = '#2a71d4'
          cxt.lineTo(0, 0)
          cxt.lineTo(11, 22)
          cxt.lineTo(22, 0)
          cxt.closePath()
          cxt.fill()
          this.setText({
            cxt,
            text: (val || num) + unit,
            color: '#2a71d4',
            font: '32px Arial',
            y: -24,
            x: 11 - this.setTextPosition({
              cxt,
              text: (val || num) + unit,
              coordinate: {
                x: X + 11,
                y: Y - 24
              }
            })
          })
          cxt.restore()
          // drawDashedLine(context, x1, y1, x2, y2, dashLength)
          cxt.save()
          cxt.beginPath()
          this.drawDashedLine(cxt, Xaxis, Yaxis + 50, Xaxis, this.text ? height - 67 : height - 5)
          cxt.stroke()
          cxt.restore()
        }
        for (let i = 0; i < this.curVal.length; i++) {
          let curValNum = this.curVal[i].num
          let Xaxis = (width - spacing * 2) * (curValNum - start) / (end - start) + spacing
          // let Yaxis = curValNum > this.maxVal ? (height - 115) * (Xaxis - maxScale) / (width - 0.5 * spacing - maxScale) + 30 : height - 85 - (height - 115) * (Xaxis - 0.5 * spacing) / (maxScale - 0.5 * spacing)
          let Yaxis = 0
          annotated(cxt, Xaxis, Yaxis, curValNum, this.curVal[i].unit, this.curVal[i].val)
        }
        let maxScale = (width - spacing * 2) * (this.maxVal - start) / (end - start) + spacing
        let top = 72
        let h = this.text ? height - 60 : height - 10
        let curveCanvas = (color) => {
          cxt.beginPath()
          cxt.fillStyle = color
          cxt.lineWidth = 2
          cxt.strokeStyle = '#2a71d4'
          cxt.moveTo(spacing / 2, h)
          let bezierCurveW = width - spacing * 0.5
          // cxt.bezierCurveTo(maxScale, h, maxScale / 2, 0, maxScale, 2)
          if (maxScale < spacing) {
            cxt.lineTo(spacing * 0.5, top)
          } else if (maxScale < spacing * 2.5) {
            cxt.lineTo(spacing * 0.5, top)
            cxt.quadraticCurveTo(maxScale * 0.5, top, maxScale, top)
          } else {
            cxt.bezierCurveTo(maxScale * 0.5, h, maxScale / 2, top, maxScale, top)
          }
          if ((width - spacing) === maxScale) {
            cxt.lineTo(width - spacing * 0.5, top)
            cxt.lineTo(width - spacing * 0.5, h)
          } else if ((width - spacing * 2.5) < maxScale) {
            // cxt.bezierCurveTo(bezierCurveW - (bezierCurveW - maxScale) / 2, 2, maxScale, 20, bezierCurveW, 20)
            cxt.quadraticCurveTo((width - spacing * 0.5) * 0.5 + maxScale * 0.5, top, bezierCurveW, top)
            cxt.lineTo(bezierCurveW, h)
          } else {
            // cxt.bezierCurveTo(bezierCurveW - (bezierCurveW - maxScale) / 2, 2, maxScale, h, bezierCurveW, h)
            // alert((bezierCurveW - (bezierCurveW - maxScale) / 3)
            cxt.bezierCurveTo(bezierCurveW - (bezierCurveW - maxScale) / 2, top, maxScale + (bezierCurveW - maxScale) / 2, h, bezierCurveW, h)
          }
          cxt.stroke()
          cxt.fill()
        }
        let grad = cxt.createLinearGradient(0, h, 0, top)
        grad.addColorStop(1, 'rgba(42, 113, 212, 1)')
        grad.addColorStop(0, 'rgba(137,217,255,0.1)')
        curveCanvas('#fff')
        curveCanvas(grad)
        if ((width - spacing) === maxScale || (width - spacing * 2.5) < maxScale) {
          cxt.save()
          this.setLine({
            cxt,
            lineWidth: 3,
            color: '#fff',
            moveTo: {
              x: width - spacing * 0.5,
              y: top - 2
            },
            lineTo: {
              x: width - spacing * 0.5,
              y: h
            }
          })
          cxt.restore()
        } else if (maxScale < spacing || maxScale < spacing * 2.5) {
          cxt.save()
          this.setLine({
            cxt,
            lineWidth: 3,
            color: '#fff',
            moveTo: {
              x: spacing * 0.5,
              y: top - 2
            },
            lineTo: {
              x: spacing * 0.5,
              y: h
            }
          })
          cxt.restore()
        }
      }
    },
    mounted () {
      let canvas = this.$el
      let cxt = canvas.getContext('2d')
      let width = this.width
      let height = this.height
      canvas.width = width
      canvas.height = height
      this.cxt = cxt
      this.init()
    }
  }
</script>
