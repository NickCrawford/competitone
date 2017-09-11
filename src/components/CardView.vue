<template>
  <div class="card-container">
    <aside>
      <div style="width: 30%;"></div>
      <div class="headers">
        <h3>Followers</h3>
        <h3>Likes</h3>
        <h3>Comments</h3>
      </div>
    </aside>
    <ul class="flex-col">
      <li v-for="brand in brands">
        <card :brand="brand"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

import Card from './Card'

export default {
  name: 'cardView',
  components: { Card },

  data () {
    return {
      brands: [
        {
          name: 'Chase',
          image_url: 'https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/10549980_941829575843000_4854938108862847549_o.png?oh=99e2e6a64a79ba25a2bbdbe9d1559ecc&oe=5A1C3A42',
          followers: '3,696,308',
          likes: '3,952,697',
          comments: '952,697',
          sentiment: {
          }
        },
        {
          name: 'PNC',
          image_url: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p200x200/13781683_10207293288832289_6054774846754436942_n.jpg?oh=d56dc0fe52d7e093130eb92cdc8446c1&oe=5A49C862',
          followers: '2,456,378',
          likes: '2,876,642',
          comments: '892,543',
          sentiment: {
          }
        },
        {
          name: 'KeyBank',
          image_url: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p200x200/20729314_1789933437689274_6993283784502919844_n.jpg?oh=e8ab30d3fcf638175f063ce60fcf9728&oe=5A4CE9BD',
          followers: '1,326,348',
          likes: '1,316,642',
          comments: '300,032',
          sentiment: {
          }
        },
        {
          name: 'Huntington',
          image_url: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c12.12.155.155/1186146_10151807100350851_944265663_n.jpg?oh=5351b6b81c65600b0cfa74864c3a1c4e&oe=5A4BAC9A',
          followers: '1,242,321',
          likes: '1,242,100',
          comments: '222,543',
          sentiment: {
          }
        },
        {
          name: 'America',
          image_url: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p200x200/21430139_1439354039452161_7492806021988159798_n.png?oh=7e16751b85e054373dd9034c8453b914&oe=5A4EB490',
          followers: '1,010,328',
          likes: '1,010,322',
          comments: '200,543',
          sentiment: {
          }
        }
        // {
        //   name: 'Huntington'
        // }
      ]
    }
  },

  mounted () {
    this.getBrands()
  },

  methods: {
    getBrands () {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      axios.get('http://localhost:4000/about', {}, config)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

aside {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  max-width: 960px;

  margin: 0 auto;

  h3 {
    display: inline;
    width: 100px;
  }
}

.headers {
  width: 70%;
  display: flex;
  justify-content: space-around;
}

.flex-col {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 960px;
  
  margin: 0 auto;
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
}

</style>
