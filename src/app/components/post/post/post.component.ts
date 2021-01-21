import {Component, OnInit, Input, Output} from '@angular/core';
import {InterfacePost} from '../../Interfaces/IPost/InterfacePost';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: InterfacePost;

  @Output()
  eventEmitter = new EventEmitter();


  constructor() {

  }

  ngOnInit(): void {

  }

  pushPostUp(post: InterfacePost): void {
    this.eventEmitter.emit(post);
  }

}
