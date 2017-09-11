<template>
  <div class="hello">
    <h1>{{ projectName }}</h1>
    <brand-search></brand-search>
    <card-view></card-view>
  </div>
</template>

<script>
import CardView from './CardView'
import BrandSearch from './BrandSearch'

export default {
  name: 'hello',

  components: { CardView, BrandSearch },

  data () {
    return {
      projectName: 'Competitone'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

h1 {
  font-size: 4em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
