import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/models/chat-message-dto';
import { RouterService } from 'src/app/services/router.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

constructor(public webSocketService: WebSocketService,public routerservice: RouterService) { }

email : any;
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
   this.email = this.routerservice.getEmailIdFromLocalStorage();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }


  sendMessage(sendForm: NgForm, Email : any) {
    const chatMessageDto = new ChatMessageDto(Email, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  }

}
