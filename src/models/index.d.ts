import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly createdAt: string;
  readonly messagechatID: string;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly createdAt: string;
  readonly messagechatID: string;
  readonly userID: string;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly status?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly messagechats?: (MessageChatUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly status?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly messagechats: AsyncCollection<MessageChatUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerMessageChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageChat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly Users?: (MessageChatUser | null)[] | null;
  readonly MostRecentMessage?: Message | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageChatMostRecentMessageId?: string | null;
}

type LazyMessageChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageChat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly Users: AsyncCollection<MessageChatUser>;
  readonly MostRecentMessage: AsyncItem<Message | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageChatMostRecentMessageId?: string | null;
}

export declare type MessageChat = LazyLoading extends LazyLoadingDisabled ? EagerMessageChat : LazyMessageChat

export declare const MessageChat: (new (init: ModelInit<MessageChat>) => MessageChat) & {
  copyOf(source: MessageChat, mutator: (draft: MutableModel<MessageChat>) => MutableModel<MessageChat> | void): MessageChat;
}

type EagerMessageChatUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageChatUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly messageChatId?: string | null;
  readonly user: User;
  readonly messageChat: MessageChat;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessageChatUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageChatUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly messageChatId?: string | null;
  readonly user: AsyncItem<User>;
  readonly messageChat: AsyncItem<MessageChat>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MessageChatUser = LazyLoading extends LazyLoadingDisabled ? EagerMessageChatUser : LazyMessageChatUser

export declare const MessageChatUser: (new (init: ModelInit<MessageChatUser>) => MessageChatUser) & {
  copyOf(source: MessageChatUser, mutator: (draft: MutableModel<MessageChatUser>) => MutableModel<MessageChatUser> | void): MessageChatUser;
}