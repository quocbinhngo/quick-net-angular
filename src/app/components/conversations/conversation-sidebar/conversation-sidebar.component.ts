import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { IConversation } from 'src/app/models/conversation/conversation';

@Component({
  selector: 'app-conversation-sidebar',
  templateUrl: './conversation-sidebar.component.html',
  styleUrls: ['./conversation-sidebar.component.css'],
})
export class ConversationSidebarComponent implements OnInit {
  faPenToSquare = faPenToSquare;

  conversations = [
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
    {
      firstName: 'abc',
      lastMessage: 'abc',
    },
  ] as IConversation[];

  constructor() {}

  ngOnInit(): void {}
}
