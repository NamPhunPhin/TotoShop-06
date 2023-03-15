const app = Vue.createApp({
    data() {
        return {
					services: [
						{
							name: 'Chocolate Freeze',
							price: 69,
							active:true
						},{
							name: 'Phindi Hạnh Nhân',
							price: 50,
							active:false
						},{
							name: 'Cà Phê Sữa',
							price: 40,
							active:false
						},{
							name: 'Trà Sen Vàng',
							price: 40,
							active:false
						}
					]
        }
    },
		methods: {
            toggleActive(s)
            {
                 s.active=!s.active;// s.active=true       
                //  console.log(s.active);
            },
            //phương thức viết trog medthod
            total()
            {
                var total=0;
                this.services.forEach(element => {
                    if (element.active)
                    {
                        total+=element.price;   
                    }
                });
                return total;
            }
		}
  });
	// Filter toàn cục
	//https://v3.vuejs.org/guide/migration/filters.html#_3-x-update
  app.config.globalProperties.$filters={
    currency(value)
    {
        return '$'+value.toFixed(2);
    }
  }