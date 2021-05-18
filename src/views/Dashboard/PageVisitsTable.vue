<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Bestsellers</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template v-slot:columns>
          <th>Name</th>
          <th>Sales</th>
          <th>Orders</th>
          <th>Perfomance</th>
        </template>

        <template 	v-slot:default="row">
          <th scope="row">
            {{ row.item.page }}
          </th>
          <td>
            {{ row.item.visitors }}
          </td>
          <td>
            {{ row.item.unique }}
          </td>
          <td>
            <i
              class="fas fa-arrow-up text-success mr-3"
              :class="
                row.item.bounceRateDirection === 'up'
                  ? 'text-success'
                  : 'text-danger'
              "
            >
            </i>
            {{ row.item.bounceRate }}
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "page-visits-table",
  data() {
    return {
      tableData: [
        {
          page: "Carbonara",
          visitors: "41,569",
          unique: "340",
          bounceRate: "46,53%",
          bounceRateDirection: "up",
        },
        {
          page: "Gazpaccho",
          visitors: "30,985",
          unique: "319",
          bounceRate: "46,53%",
          bounceRateDirection: "up",
        },
        {
          page: "Fetuccini with salmon",
          visitors: "30,513",
          unique: "294",
          bounceRate: "36,49%",
          bounceRateDirection: "up",
        },
        {
          page: "Steak tartare",
          visitors: "20,050",
          unique: "147",
          bounceRate: "50,87%",
          bounceRateDirection: "up",
        },
        {
          page: "Caesar salad with shrimps",
          visitors: "1,795",
          unique: "190",
          bounceRate: "46,53%",
          bounceRateDirection: "up",
        },
      ],
    };
  },
};
</script>
<style></style>
