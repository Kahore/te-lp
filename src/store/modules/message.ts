import { VuexModule, Module, getModule, Mutation, Action, MutationAction} from 'vuex-module-decorators';
import store from '../store';
import { Dialog, DialogMessage, UserClass } from '../models';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'message',
  store,
})
class MessageModule extends VuexModule {
  [x: string]: any;
  public messageList: Dialog[] = [
    {
      id: 1,
      subject: 'Простой запрос',
      created: '2019-08-01 23:59',
      parts: [
        {
          id: 1,
          author: 'vasya',
          text: 'Привет, как дела?',
          created: '2019-08-01 23:59',
        },
        {
          id: 2,
          author: 'petya',
          created: '2019-08-02 01:20',
          text: 'Привет, все хорошо, спасибо!',
        },
        {
          id: 3,
          author: 'petya',
          created: '2019-08-02 05:20',
          text: 'А у тебя?',
        },
      ],
    },
    {
      id: 2,
      subject: 'Вопрос по домену',
      created: '2016-03-02 14:19',
      parts: [
        {
          id: 1,
          author: 'petr',
          created: '2019-08-06 12:20',
          text: 'Здравствуйте, тут есть кто-нибудь? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        {
          id: 2,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Да, я вас слушаю!',
        },
        {
          id: 3,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'Помогите мне настроить домен!',
        },
      ],
    },
  ];
  public selected: Dialog =  {
      id: 0,
      subject: '',
      created: '',
      parts: [],
    };
  public isLoading: boolean = false;
  public get conversation(): Dialog {
    return this.selected;
  }
  public get conversationList(): Dialog[] {
    return this.messageList;
  }

  public get isLoadingConversation(): boolean {
    return this.isLoading;
  }

  public get getUniqueUser(): UserClass[] {
    const list: DialogMessage[] = this.conversation.parts.filter((thing, index, self) =>
      index === self.findIndex((t) => (
      t.author === thing.author
    )));
    const userClass: UserClass[] = [];
    let newObj;
    let internalCount = 1;
    list.map((item) => {
      newObj = { author: item.author, class: 'message message--user-' + internalCount };
      internalCount = internalCount + 1;
      userClass.push(newObj);
    });
    return userClass;
  }
  @Mutation
  public loadingSingle() {
    this.isLoading = !this.isLoading;
  }
  @Mutation
  public addNewMessage(newMsg: DialogMessage) {
    this.selected.parts.push(newMsg);
  }
  @MutationAction
    public async loadSingleConversation(id: string) {
      this.commit('loadingSingle');
      // In real app is no need call getters, cause here we should call API
      const selectedConversation: Dialog[] = this.getters.conversationList.filter((message: { id: number; }) => {
          return message.id === Number(id);
      });
      const selected: Dialog = selectedConversation[0];
      setTimeout(() => {
        this.commit('loadingSingle');
      }, 3000);
      return { selected };
  }
  @Action({commit: 'addNewMessage'})
  public insertMessage(newMsg: DialogMessage) {
    // Here we should call get request
    return newMsg;
  }
}

export default getModule(MessageModule);
