import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './hero.int';
import { HEROES_DB } from './mock-heroes-db';

@Injectable({
  	providedIn: 'root'
})
export class HeroService {

  	constructor(private messageService: MessageService) { }

  	getHeroes(): Observable<Hero[]> {
  		this.messageService.add('HeroService: fetched heroes!');
  		return of(HEROES_DB);
  	}

  	getHero(id: number): Observable<Hero> {
  		this.messageService.add('HeroService: fetched hero id=' + id);
  		return of(HEROES_DB.find(hero => hero.id === id));
  	}
}
