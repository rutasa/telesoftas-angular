import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  suggestions: any[];
  suggestion: string;

  constructor() {}

  ngOnInit() {
    this.suggestion = '';
    this.suggestions = [];
  }

  likeSuggestion(sugg) {
    sugg.likes += 1;
    sugg.liked = true;
  }

  addSuggestion() {
    this.suggestions.push({'suggestion': this.suggestion, 'likes': 0, 'liked': false});
  }
}
