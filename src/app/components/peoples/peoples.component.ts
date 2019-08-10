import { Observable } from 'rxjs';
// declare var $: any;
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PeoplesService } from '../../services/peoples.service';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { People } from '../../models/people';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})

export class PeoplesComponent implements OnInit {

  public searchText: string;
  public peoples: Array<People>;
  public peopler =new People();
  public oldPeople :People;
  public ModeModal:number;

  constructor(private peopleService: PeoplesService, private homeService: HomeService) { }

  ngOnInit() {

    this.getPeoples();
  }

  getPeoples(){
    this.peopleService.getPeoples().subscribe(
      (data) => this.peoples = data,
      (error) => console.log("error",error)

    );
    this.homeService.setActiveNav(true);
  }

  addPeople(addPeople: People){
    this.peopleService.addPeople(addPeople).then(
      () => {
        Swal.fire({
          title:"Bien Hecho!",
          text:'Su Heroe ha sido creado correctamente',
          type:'success'
        });
      }).catch(
      error => console.log('Error',error)
    );



  }

  deletePeople(IdPeople){

    Swal.fire({
      title: 'Estas seguro?',
      text: "Jamas volveras a verlo!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Quiero eliminarlo!'
    }).then((result) => {
      if (result.value) {
        this.peopleService.deletePeople(IdPeople);
        Swal.fire(
          'Eliminado!',
          'Tu heroe ha sido eliminado.',
          'success'
        )
      }
    })



    // this.peopleService.deletePeople(IdPeople);

  }

  updatePeople(updatePeople:People){

    this.peopleService.updatePeople(updatePeople).then(
      () =>{
        Swal.fire({
          title:"Bien Hecho!",
          text:'Su Heroe ha sido modificado correctamente',
          type:'success'
        });
      }
    ).catch(error => console.log("Error",error));



  }

  openModal(IdPeople){

    this.peopleService.getPeopleById(IdPeople).subscribe( data =>{
        this.peopler = data;
    });

  }

  clearInputs(){
      this.peopler.id = '';
      this.peopler.name = '';
      this.peopler.biography = '';
      this.peopler.heroe = '';
  }







}
