import { People } from './../../models/people';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../../node_modules/@angular/router";
import { PeoplesService } from "../../services/peoples.service";
import { HomeService } from '../../services/home.service';

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  public peopleDetails: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peoplesService: PeoplesService,
    private homeService: HomeService
  ) {



  }

  ngOnInit() {
    this.peopleDetails ='';

    const id = this.route.snapshot.paramMap.get('id');
    if(id.length != 20){
      this.router.navigate(['/peoples']);
    }else{

      this.peoplesService.getPeopleById(id).subscribe(
        (data) => {
          if(data)this.peopleDetails = data;
          else this.router.navigate(['/peoples']);
        },
        (error) => console.log("error",error)

      );
    }
    this.homeService.setActiveNav(true);

  }
}
