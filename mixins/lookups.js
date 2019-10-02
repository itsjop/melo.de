//mixin.js

import { db } from '../firebase';
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
    }
  },
  methods:{
    artistLookup( artistID ) {
      // let userInfo = "ad"
      let query = this.$firestore.users.where("username", "==", artistID).get()
        .then(function(querySnapshot) {
          let eaf = ""
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              eaf=doc.data()
          });
          return(eaf)
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      return query
    }
  }
}