import { Component, Input, OnInit } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { IConversation } from 'src/app/models/conversation/conversation';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.css'],
})
export class ConversationItemComponent implements OnInit {
  @Input()
  conversation: IConversation = new IConversation();

  constructor() {}

  ngOnInit(): void {}
}
