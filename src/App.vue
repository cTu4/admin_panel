<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
  .dataTables_wrapper select{
    background: #f6f9fc !important;
    min-width: 50px;
    border-radius: 5px;
    padding: 3px!important;
    margin: 0 10px!important;
    cursor: pointer;
    color: #525f7f!important;
    outline:0px;

  }
  .dataTables_wrapper select:focus{
    /*border: 1px solid #ccc!important;*/
    /*outline:0px;*/
  }
  .dataTables_wrapper th{
    color: #8898aa!important;
    background-color: #f6f9fc!important;
    border-color: #bfc2c6 !important;
    border-bottom: 1px solid #bfc2c6!important;
  }
  #dataTables-example{
    max-width: 1600px;
  }
  .header-body > .row{
    justify-content: center;
  }
</style>
