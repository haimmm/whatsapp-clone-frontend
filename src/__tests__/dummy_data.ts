import type { ChatNodeType } from "../Components/SideBar/ChatNode/ChatNode";
// prettier-ignore
const dummyChatNodes: ChatNodeType[] = [
    {id: 0, name: 'user0', time: new Date(2022, 0, 6, 12, 31), lastMessage: "user0 last message...", unreadCounter: 8},
    {id: 1, name: 'user1', time: new Date(2022, 0, 6, 17, 38), lastMessage: "user1 last message...", unreadCounter: 0},
    {id: 2, name: 'user2', time: new Date(2022, 0, 6, 18, 11), lastMessage: "user2 last message...", unreadCounter: 11},
    {id: 3, name: 'user3', time: new Date(2022, 0, 6, 19, 22), lastMessage: "user3 last message...", unreadCounter: 19},
    {id: 4, name: 'user4', time: new Date(2022, 0, 6, 23, 13), lastMessage: "user4 last message...", unreadCounter: 243},
    {id: 5, name: 'user5', time: new Date(2022, 0, 6, 14, 31), lastMessage: "user5 last message...", unreadCounter: 8},
    {id: 6, name: 'user6', time: new Date(2022, 0, 6, 15, 58), lastMessage: "user6 last message...", unreadCounter: 0},
    {id: 7, name: 'user7', time: new Date(2022, 0, 6, 16, 41), lastMessage: "user7 last message...", unreadCounter: 111},
    {id: 8, name: 'user8', time: new Date(2022, 0, 6, 17, 32), lastMessage: "user8 last message...", unreadCounter: 192},
    {id: 9, name: 'user9', time: new Date(2022, 0, 6, 22, 23), lastMessage: "user9 last message...", unreadCounter: 249},
    {id: 10, name: 'user10', time: new Date(2022, 0, 6, 13, 31), lastMessage: "user5 last message...", unreadCounter: 8},
    {id: 11, name: 'user11', time: new Date(2022, 0, 6, 17, 58), lastMessage: "user6 last message...", unreadCounter: 0},
    {id: 12, name: 'user12', time: new Date(2022, 0, 6, 12, 41), lastMessage: "user7 last message...", unreadCounter: 111},
    {id: 13, name: 'user13', time: new Date(2022, 0, 6, 11, 34), lastMessage: "user8 last message...", unreadCounter: 192},
    {id: 14, name: 'user14', time: new Date(2022, 0, 6, 23, 43), lastMessage: "user9 last message...", unreadCounter: 249},
]

const getDummyChatNodes = (
  n: number = dummyChatNodes.length
): ChatNodeType[] => {
  return dummyChatNodes.slice(0, n);
};

export { getDummyChatNodes };
