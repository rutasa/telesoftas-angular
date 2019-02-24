import { Component, OnInit } from '@angular/core';
import { ISuggestion } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  suggestions: ISuggestion[];
  suggestion: string;

  constructor() {}

  ngOnInit() {
    this.suggestion = '';
    this.suggestions = [];
  }

  likeSuggestion(sugg) {
    sugg.likes = sugg.liked ? sugg.likes - 1 : sugg.likes + 1;
    sugg.liked = !sugg.liked;
  }

  addSuggestion() {
    this.suggestions.push({'suggestion': this.suggestion, 'likes': 0, 'liked': false});
  }
}
