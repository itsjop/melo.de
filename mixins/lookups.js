//mixin.js

import { db } from '../firebase2';
import { resolve } from 'path';

export default {  
  data() {
    return {
    }
  },
  mounted(){
  },
  firestore() {
    return {
      users: db.collection('users'),
      songList: db.collection('songs'),
      specificUser: db.collection('users').doc('8xYhzykJuvHZA8O7evX5').collection('songs')
    }
  },
  methods:{
    artistLookup( artistID ) {
      // let userInfo = "ad"
      let query = this.$firestore.users.where("username", "==", artistID).get().then(query => {
          let eaf = ""
          query.forEach(user => {
            // doc.data() is never undefined for query doc snapshots
            console.log(user.id, " => ", user.data());
            eaf=user.data()
          });
          return(eaf)
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      return query
    },
    songLookup(){
      console.log("this sucks")
    }
  }
}