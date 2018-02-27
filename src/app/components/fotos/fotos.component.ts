import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


export interface Item { nombre: string, url: string };
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {
  
  public itemsCollection: AngularFirestoreCollection<Item>;
  public items: Observable<Item[]>

  public constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
  }

  public ngOnInit() {
  }

}
