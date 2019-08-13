import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: []// tv search service
})
export class SearchBarComponent implements OnInit {
  // private searchTerms = new Subject<string>();
  tvSearchForm;
  constructor(private formBuilder: FormBuilder, public searchService: SearchService ) {
    this.tvSearchForm = this.formBuilder.group({
      show: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(value): void {
    // Push a search term into the observable stream.
    console.log('going to search for....', value);
    this.searchService.getShows(value.show);

    // this.searchTerms.next(term);
  }

}
