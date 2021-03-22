import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Book} from '../shared/book';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {

  }

  private book:Book;

  public getBook(title:string):Book{
    return this.storage.get(title);
  }

  public setBook(book:Book){
    var title = book.title;
    this.storage.set(title,book);
  }

  public getCurrentAuth(){
    return this.storage.get("idToken");
  }

}
