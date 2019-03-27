import { Component, OnInit } from '@angular/core';


declare const google: any;

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  ngOnInit() {
    const trackerDetails = this.getDummyJson();
    const trackerRemoveDiv = document.querySelector('div#replayControl');
    console.log(trackerRemoveDiv);
    if (trackerRemoveDiv) {
      trackerRemoveDiv.remove();
    }
  console.log(trackerDetails);
  }
  getDummyJson() {
    console.log('inside dummy json');
    let trackerResponse = {
      "originCode" : "SEA",
      "destinationCode" : "JFK",
      "destinationCity": "New York City,NY(JFK)",
      "originCity": "Seattlle, Washington(SEA)",
      "dateRange": "April 27, 2019",
    };
    return trackerResponse;
  }
}
