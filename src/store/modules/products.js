export default {
    namespaced:true,
    state() {
        return {
           products: [
                {
                  id: 'p1',
                  image:
                    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
                  title: 'Tshirt Collection',
                  description:
                    'A collection of clothes. All-time classics included!',
                  price: 99.99,
                },
                {
                  id: 'p2',
                  image:
                    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                  title: 'Mountain Tent',
                  description: 'A tent for the ambitious outdoor tourist.',
                  price: 129.99,
                },
                {
                  id: 'p3',
                  image:
                    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
                  title: 'Tshirt Model',
                  description:
                    'May be partially expired when it arrives but at least it is cheap!',
                  price: 6.99,
                },
              ]
        }
    },
    getters:{
        products(state){
            return state.products;
        }
    }
}