import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { 
  }
  getUserInfo(userId: string){
    let userInfo = []
    this.firestore.collection('user').ref.where("id", "==", userId).get().then(user => {user.forEach(doc => 
      userInfo.push({id: doc.get('id'), password: doc.get('password')})
       )})
    return userInfo
  }
}