<template>
    <div>
      <select @change="filterChange($event)">
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
      </select>
      <select @change="sortChange($event)">
        <option value="rating">Rating</option>
        <option value="release_date">Release Date</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      filterChange(event) {
        this.$emit("filter", event.target.value);
      },
      sortChange(event) {
        this.$emit("sort", event.target.value);
      },
    },
  };
  </script>
  