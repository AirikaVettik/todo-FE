
<template>
<div class="container">
    <div class="bg-white shadow rounded px-5 pt-3 pb-5 border border-white">
        <div class="row mt-5">
            <div class="col-12 text-center">
                <label for="title" class="block text-sm font-medium text-gray-700">Enter your name</label>
                <input
                    type="text"
                    v-model="createdBy"
                    name="title"
                    class="mt-1 block w-full border-gray p-1 "
                    style="text-align:center">
            </div>
        </div>
    
        <div class="row mt-5">
            <div class="col text-center">
            <button @click="$router.push('todo')" class="bg-green-400 px-4 py-2 rounded">Submit name</button>
            </div>
        </div>
    </div> 
    </div>
</div>
</template>

<script>
export default {
    name: "createdby",
    data() {
        return this.$store.state
    }
}
</script>


<style scoped>
  .border-gray {
    border-bottom: 1px solid rgba(55, 65, 81, 0.3);
    border-radius: 0;
  }
</style>