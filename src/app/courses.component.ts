import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
            <h2>{{ title }}</h2>
            <h2 [textContent]="title"></h2>
            <img src ="{{ imageUrl }}" />
            <img [src]="imageUrl" />

            <table>
                <tr>
                    <td [attr.colSpan] = "colSpan" ></td>
                </tr>
            </table>
            <ul>
                <li *ngFor= "let course of courses">
                    {{course}}
                </li>
            </ul>

            <button class="btn btn-primary" [class.active]="isActive">SAVE</button>

            <button [style.backgroundColor] ="isActive ? 'blue' : 'white'">SAVE</button>
            
            <div (click)="onDivClicked()">
                <button (click)="onSave($event)">Save</button>
            </div> 

            <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

            {{ course.title | uppercase}} <br/>
            {{ course.students | number}} <br/>
            {{ course.rating | number: '1.2-2'}} <br/>
            {{ course.price | currency:'AUD':true:'3.2-2'}} <br/>
            {{ course.releaseDate | date:'shortDate'}} <br/>

            {{ text | summary: 10 }}

            `
})

export class CoursesComponent {
    text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `
    title = "List of courses";
    imageUrl = "";
    courses;
    colSpan = 2;
    isActive = true;

    // dependency means injecting or providing the dependencies on class into its constructor
    constructor(service: CoursesService ) {
        // let service = new CoursesService;
        this.courses =  service.getCourses();
    }

    // for first keyup.enter method
    // onKeyUp($event) {
    //     // console.log("ENTER was pressed");
    //     console.log($event.target.value);
    // }

    email = "me@example.com"
   
    onKeyUp() {
        // console.log("ENTER was pressed");
        console.log(this.email);
    }

    onDivClicked(){
        console.log("div was clicked");
    }

    onSave($event){
        $event.stopPropagation();
        console.log("button was clicked", $event);
    }

    course = {
        title: "angular",
        rating: 3.1245,
        students: 4545,
        price: 41.555,
        releaseDate: new Date(2021, 1, 13)
    }
}