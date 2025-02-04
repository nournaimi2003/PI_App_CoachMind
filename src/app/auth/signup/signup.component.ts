import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../model/Categorie.model';
import { user } from '../../model/user';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  newUser = new user();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  
  constructor(private userService: UserService, private router : Router) {}

  ngOnInit(): void {
    this.userService.AllCategories().
    subscribe(cats => {this.categories = cats;
    console.log(cats);
    });
  }
  adduser(){
    this.newUser.categorie = this.categories.find(cat => cat.idCategorie == this.newIdCat)!;
    this.userService.AddUser(this.newUser)
                      .subscribe(u => {
                      console.log(u);
                      
                      }); 
    }


}
