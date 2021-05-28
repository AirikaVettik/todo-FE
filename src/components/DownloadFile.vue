<template>
    <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row mt-3">
  
      <div class="col">
        <label for="priority" class="inline-block text-sm font-medium text-gray-700">File type</label>
        <select v-model="form.fileType" name="priority" class="mt-1 block w-full border-gray p-1">
          <option value="PDF">PDF</option>
          <option value="XLSX">XSLX</option>
          
        </select>
      </div>
    </div>
    <br>
    <div class="row mt-3">
      <div class="col">
          <label for="priority" class="inline-block text-sm font-medium text-gray-700">Statuses to include in the file</label> <br><br>
          <input type="checkbox" id="ToDo" value="ToDo" v-model="form.todo">
          <label for="todo"> Todo </label> <br>
          <input type="checkbox" id="Done" value="Done"  v-model="form.done">
          <label for="done"> Done </label>
        <br>
      </div>
</div>

    <div class="row mt-5">
      <div class="col text-right">
        <button class="bg-green-400 px-4 py-2 rounded" v-on:click="getFile">Download</button>
      </div>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      form: {
        fileType: 'PDF',
        todo: true,
        done: true
      }
    }
  },
  methods: {
    async getFile () {
      await axios({
        url: 'https://airika-todoapp.herokuapp.com/api/downloadFile',
        method: 'POST',
        data: this.form,
        responseType: 'arraybuffer'
      }).then(rs => {
        this.downloadBinaryFile(rs.data, rs.headers, 'Todo')
      })
    },
    downloadFile (content, headers, name) {
      const blob = new Blob([
        content
      ], { type: headers['content-type'] })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = !name ? headers['content-disposition'].split('filename=')[1].replace(/(^")|("$)/g, '') : name + (blob.type === 'application/pdf' ? '.pdf' : '')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    downloadBinaryFile (binaryContent, headers, name) {
      this.downloadFile(new Uint8Array(binaryContent), headers, name)
    }
  }
};
</script>
<style scoped>
  .border-gray {
    border-bottom: 1px solid rgba(55, 65, 81, 0.3);
    border-radius: 0;
  }
</style>