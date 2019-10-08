export interface Dialog {
   id: number;
   subject: string;
   created: string;
      parts: DialogMessage[];
}

export interface DialogMessage {
  id: number;
  author: string;
  text: string;
  created: string;
}
