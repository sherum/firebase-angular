import {Person} from './person';
import {Thing} from './thing';
import {Eventd} from './eventd';
import {Location} from './location';
import {SceneBody} from './sceneBody';

export class Scene{
  id:number;
  startDateTime:Date;
  summary:string;
  location:Location;
  heading:string;
  sceneBody:SceneBody;
  personSet:Array<Person>;
  thingSet:Array<Thing>;
  eventSet:Array<Eventd>;


}
