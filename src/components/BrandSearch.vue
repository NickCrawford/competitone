<template>
	<div class="search-container">
	  <label>Search for a brand or company:</label>
	  <input type="text" name="brand" placeholder="J.P. Morgan & Chase">
	</div>
</template>

<script>
export default {
  name: 'brandSearch',

  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$light: #b7bcbb;

label {
	display: block;
}

input[type=text] {
	width: 100%;
	max-width: 620px;
	padding: 10px 20px;

	color: white;
	background: transparent;
	box-shadow: none;
	border-radius: 2px;
	border: 2px solid $light;

	font-size: 16px;
}
</style>
