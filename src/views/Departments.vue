<template>
  <div>
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5">

      <div v-if="total" class="row">
        <div class="col-xl-4 col-lg-4">
          <stats-card
              title="Total"
              color="gradient-blue"
              :sub-title="total"
              icon="ni ni-shop"
              class="mb-4 mb-xl-0 non-m"
          >
<!--            <template v-slot:footer>-->
<!--              <span class="text-success mr-2">-->
<!--                <i class="fa fa-arrow-up"></i> 3.48%-->
<!--              </span>-->
<!--              <span class="text-nowrap">Since last month</span>-->
<!--            </template>-->
          </stats-card>
        </div>
        <div v-if="active" class="col-xl-4 col-lg-4">
          <stats-card
              title="Active"
              type="gradient-green"
              :sub-title="active"
              icon="ni ni-shop"
              class="mb-4 mb-xl-0 non-m"
          >
<!--            <template v-slot:footer>-->
<!--              <span class="text-danger mr-2">-->
<!--                <i class="fa fa-arrow-down"></i> 5.72%-->
<!--              </span>-->
<!--              <span class="text-nowrap">Since last month</span>-->
<!--            </template>-->
          </stats-card>
        </div>
        <div v-if="blocked" class="col-xl-4 col-lg-4">
          <stats-card
              title="Blocked"
              type="gradient-red"
              :sub-title="blocked"
              icon="ni ni-shop"
              class="mb-4 mb-xl-0 non-m"
          >
<!--            <template v-slot:footer>-->
<!--              <span class="text-danger mr-2">-->
<!--                <i class="fa fa-arrow-down"></i> 5.72%-->
<!--              </span>-->
<!--              <span class="text-nowrap">Since last month</span>-->
<!--            </template>-->
          </stats-card>
        </div>
      </div>
    </base-header>
      <!-- Card stats -->
    <div class="outlets mt--7 ">
      <table-lite
          :has-checkbox="true"
          :is-loading="table.isLoading"
          :is-re-search="table.isReSearch"
          :columns="table.columns"
          :rows="table.rows"
          :total="table.totalRecordCount"
          :sortable="table.sortable"
          :messages="table.messages"
          @do-search="doSearch"
          @is-finished="tableLoadingFinish"
          @return-checked-rows="updateCheckedRows"
      ></table-lite>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TableLite from "vue3-table-lite";
import axios from "axios";
import moment from 'moment';

export default {
  name: "Departments",
  components: {
    TableLite
  },
  data(){
    return {
      total: 0,
      active: 0,
      blocked: 0,
      currency: "$",
      table:{
        isLoading: false,
        isReSearch: false,
        columns: [
          {
            label: "Brand",
            field: "brandName",
            width: "33%",
            sortable: true,
            isKey: true,
          },
          {
            label: "Outlet",
            field: "outletName",
            width: "33%",
            sortable: true,
            // display(row){
            //   return parseFloat(row.lastName).toFixed(2) + " " + row.currency;
            // }
          },
          {
            label: "Department",
            field: "departmentName",
            width: "33%",
            sortable: true,
            // display(row){
            //   return parseFloat(row.lastName).toFixed(2) + " " + row.currency;
            // }
          },
          {
            label: "Active",
            field: "isActive",
            width: "1%",
            sortable: true,
            display(row){
              return row.isActive === "Y"? "<i class=\"fas fa-check\"></i>" : "<i class=\"fas fa-times\"></i>"
            }
            // display(row){
            //   return parseFloat(row.lastName).toFixed(2) + " " + row.currency;
            // }
          },
          // {
          //   label: "Date",
          //   field: "paymentDate",
          //   width: "5%",
          //   sortable: true,
          //   display(row){
          //     return moment(row.paymentDate*1000).format('DD.MM.YYYY, hh:mm:ss');
          //   }
          // },
          // {
          //   label: "Business date",
          //   field: "businessDate",
          //   width: "5%",
          //   sortable: true,
          //   display(row){
          //     return row.businessDate?moment(row.businessDate*1000).format('DD.MM.YYYY, hh:mm:ss'): "-";
          //   }
          // },
          // {
          //   label: "Type",
          //   field: "paymentType",
          //   width: "5%",
          //   sortable: true
          // }
        ],
        rows: [

        ],
        totalRecordCount: 2,
        sortable: {
          order: "id",
          sort: "asc",
        },
        messages: {
          pagingInfo: "Showing {0}-{1} of {2}",
          pageSizeChangeLabel: "Row count:",
          gotoPageLabel: "Go to page:",
          noDataAvailable: "No data",
        },
      }

    }
  },
  methods:{
    doSearch(offset, limit, order, sort){
      this.table.isLoading = true;
      // this.table.isReSearch = offset == undefined ? true : false;

      if(sort === "asc"){
        this.table.rows.sort((a,b) => (a.[order] < b.[order]) ? 1 : ((b.[order] < a.[order]) ? -1 : 0))
      }
      else{
        this.table.rows.sort((a,b) => (a.[order] > b.[order]) ? 1 : ((b.[order] > a.[order]) ? -1 : 0))
      }
      // do your search event to get newRows and new Total
      this.table.sortable.order = order;
      this.table.sortable.sort = sort;
      this.table.isLoading = false;

    },
    tableLoadingFinish(elements){

      this.table.isLoading = false;
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function () {
            // do your click event
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          // do your click event
          element.addEventListener("click", function () {
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    },
    updateCheckedRows(rowsKey){
      console.log(rowsKey);

    }
  },
  mounted(){

  },
  created(){
    if(!this.$store.state.auth){
      this.$router.push(
          {
            name: 'login'
          });
    }
    // let auth = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3NvLmJyZXN0LmFwcFwvIiwic3ViIjoiQkI3OTYwODYtQkUwMS0xMUVCLTgxQ0ItNkVGOTFGRTZBODA1IiwiaWF0IjoxNjIyNjU1NzYwLCJleHAiOjE2MjI2NzAxNjB9.ZZ3m7OdA4h_2M3GWWy8qyO1pBhGye0zlGsTUXUiscNo";
    axios.get('https://api.brest.app/department/',{
      headers:{
        // Authorization: auth
        Authorization: this.$store.state.auth
      }
    }).then((resp)=>{
      let data = resp.data;
      if(data.STATUS === "SUCCESS"){
        let rows = [];
        let total = 0,
            active = 0,
            blocked = 0;
        for (let item in data.RESULT){
          let row = data.RESULT[item];
          row.isActive === "Y"? active += 1 : blocked += 1;
          // let price = parseFloat(row.paymentAmount);
          total += 1;
          rows.push(row);

        }
        this.total = total;
        this.active = active;
        this.blocked = blocked;
        this.table.rows = rows;
        this.table.totalRecordCount = rows.length;

      }
    });

  }
};
//this.table.rows.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
</script>
<style >
  .outlets{
    padding-left: 39px !important;
    padding-right: 39px !important;
  }
  .outlets .card{
    padding: 0!important;
  }
  .outlets .card-body{
    padding: 0 1.5rem!important;
  }
  .outlets table{
    margin-bottom: 10px!important;
  }
  .outlets .dataTables_wrapper{
    padding-bottom: 10px;
  }
  .non-m > div{
    margin-bottom: -1rem!important;
  }

  @media (max-width: 1025px){
    .outlets table th, .outlets table td{
      padding: .5rem!important;
    }
    .outlets .dataTables_wrapper{
      overflow-x: auto!important;
    }
    .mt--7{
      margin-top: -8rem !important;
    }
  }
</style>
