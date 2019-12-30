import { Component } from '@angular/core';
import { assign, merge, defaults, defaultsDeep, isEqual} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lesson;

  ngOnInit() {
  }

  lesson1() {
    this.lesson = 1;
    console.clear();
    console.log('assign', assign({ a: '1' }, { b: '2' }))
    console.log('merge', merge({ a: '1' }, { b: '2' }))
    console.log('defaults', defaults({ a: '1' }, { b: '2' }))
    console.log('defaultsDeep', defaultsDeep({ a: '1' }, { b: '2' }))
  }

  lesson2() {
    this.lesson = 2;
    console.clear();
    console.log('assign', assign({}, { a: '1' }, { a: '2' }))
    console.log('merge', merge({}, { a: '1' }, { a: '2' }))
    console.log('defaults', defaults({}, { a: '1' }, { a: '2' }))
    console.log('defaultsDeep', defaultsDeep({}, { a: '1' }, { a: '2' }))
  }

  lesson3() {
    this.lesson = 3;
    console.clear();
    console.log('assign', assign({}, { a: ['1'] }, { a: ['2'] }))
    console.log('merge', merge({}, { a: ['1'] }, { a: ['2'] }))
    console.log('defaults', defaults({}, { a: ['1'] }, { a: ['2'] }))
    console.log('defaultsDeep', defaultsDeep({}, { a: ['1'] }, { a: ['2'] }))
  }

  lesson4() {
    this.lesson = 4;
    console.clear();
    console.log('assign', assign({}, { a: '1' }, { a: null }))
    console.log('merge', merge({}, { a: '1' }, { a: null }))
    console.log('defaults', defaults({}, { a: '1' }, { a: null }))
    console.log('defaultsDeep', defaultsDeep({}, { a: '1' }, { a: null }))
  }

  lesson5() {
    this.lesson = 5;
    console.clear();
    console.log('assign', assign({}, { a: '1' }, { a: undefined }))
    console.log('merge', merge({}, { a: '1' }, { a: undefined }))
    console.log('defaults', defaults({}, { a: '1' }, { a: undefined }))
    console.log('defaultsDeep', defaultsDeep({}, { a: '1' }, { a: undefined }))
  }

  lesson6() {
    this.lesson = 6;
    console.clear();
    console.log('assign', assign({}, { a: { c: '1' } }, { a: { b: '2' } }))
    console.log('merge', merge({}, { a: { c: '1' } }, { a: { b: '2' } }))
    console.log('defaults', defaults({}, { a: { c: '1' } }, { a: { b: '2' } }))
    console.log('defaultsDeep', defaultsDeep({}, { a: { c: '1' } }, { a: { b: '2' } }))
  }

  lesson7() {
    this.lesson = 7;
    console.clear();
    let obj1 = {
      a: {
        b: '1',
        c: '2'
      }
    }
    let obj2 = {
      a: {
        b: undefined
      }
    }
    let answer = {};
    console.log('合併', obj1, obj2, 'answer.a.b 為 falsy value，answer.a.c 為 2')
    console.log('通過:', !answer['a']['b'] && answer['a']['c'] === '2')
  }

  lesson8() {
    this.lesson = 8;
    console.clear();
    let obj1 = {
      a: '1',
      b: undefined,
      c: '3',
      d: null,
    }
    let obj2 = {
      a: '5',
      b: '6',
      c: '7',
      d: '8',
    }
    let result = {
      a: '1',
      b: '6',
      c: '3',
      d: '8',
    }

    let answer = {};
    console.log('合併', obj1, obj2, '為', result)
    console.log('通過:', isEqual(answer, result))
  }
}