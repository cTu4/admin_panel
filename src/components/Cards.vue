<template>
  <div class="row">
    <div v-for="(card,index) in cards" :key="index" class="col-xl-4 col-lg-6">
      <stats-card
          :title="card.title"
          :type=card.color
          :sub-title="card.mainHead ? card.subTitle: card.footerTitle"
          :icon=card.icon
          class="mb-4 mb-xl-0"
          :class="{'non-m': !card.showFooter}"
      >
        <template v-slot:footer v-if="card.showFooter">
              <span :class="card.footerClass" class="mr-2">
                {{card.footerTitle}}
              </span>
        </template>
      </stats-card>
    </div>
  </div>
</template>
<script>
  export default {
     data(){
       return{
         cards: []
       }
     },
    props:{
       "fieldSum" : String,
        "cardsData": Array,
        "data": Array
    },
    watch:{
      data(){
        let total = 0,
            total_sum=0,
            total_payed=0,
            total_payed_sum=0;
        console.log(this.data);
        this.data.forEach((row) => {
          let price = parseFloat(row[this.fieldSum]);
          total_sum += price;
          total++;
          if(row.isPayed === "Y"){
            total_payed_sum += price;
            total_payed++;
          }
        });
        let total_not_payed = total - total_payed,
            total_not_payed_sum = total_sum - total_payed_sum,
            currency = "USD";
        this.cardsData.forEach((card, index) =>{
          console.log(card.showFooter)
          this.cards.push({
            title: card.Title,
            subTitle: index === 0? total :
                index === 1? total_payed :
                    total_not_payed,
            icon: card.icon,
            color: card.color,
            footerTitle: (index === 0? total_sum :
                index === 1? total_payed_sum :
                    total_not_payed_sum)
                + " " + currency,
            currency: "USD",
            footerClass: card.footerClass,
            mainHead: card.mainHead, // { head / footer }
            showFooter: card.showFooter
          });
        });
      }
    },
    created(){


    }
  }
</script>
<style>

</style>