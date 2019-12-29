import { Component } from '@angular/core';
import { assign, merge, defaults, defaultsDeep } from 'lodash';

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
    console.log('assign', assign({}, { a: { a: '1' } }, { a: { b: '2' } }))
    console.log('merge', merge({}, { a: { a: '1' } }, { a: { b: '2' } }))
    console.log('defaults', defaults({}, { a: { a: '1' } }, { a: { b: '2' } }))
    console.log('defaultsDeep', defaultsDeep({}, { a: { a: '1' } }, { a: { b: '2' } }))
  }


}