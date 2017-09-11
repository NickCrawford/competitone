<template>
  <div class="card">
    <aside>
      <img :src="brand.image_url" :alt="brand.name" class="brand-image" ref="brandImage">
      <h2>{{ brand.name }}</h2>
    </aside>
    <main>
      <h3>{{ brand.followers || '-' }}</h3><!-- Followers -->
      <h3>{{ brand.likes || '-' }}</h3><!-- Likes -->
      <h3>{{ brand.comments || '-' }}</h3><!-- Comments -->
    </main>
  </div>
</template>

<script>
  import Vibrant from '../../node_modules/node-vibrant'

  export default {
    name: 'card',

    props: ['brand'],

    data () {
      return {
      }
    },

    methods: {

    },

    mounted () {
      // var vm = this

      this.$nextTick(() => {
        var img = this.$refs.brandImage

        img.addEventListener('load', () => {
          var vibrant = new Vibrant(img)
          console.log(vibrant)
          var swatches = vibrant.swatches()
          console.log(swatches)
          for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
              console.log(swatch, swatches[swatch].getHex())
            }
          }
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    height: 100px;
    margin-bottom: 20px;

    border-radius: 2px;

    background-color: white;
    color: #333;

    overflow: hidden;
  }

  aside {
    text-align: left;
    width: 30%;
  }

  h2, h3 {
    height: auto;
    margin: 0;
    padding-top: calc(56px - 1em);

    vertical-align: top;
    display: inline-block;

    text-wrap: nowrap;
  }

  h2 {
    margin-left: 10px;
  }

  h3 {
    text-align: center;
    width: 100px;
  }

  main {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .brand-image {
    display: inline-block;
    width: 100px;
    height: 100px;

    object-fit: contain;

  }
</style>
