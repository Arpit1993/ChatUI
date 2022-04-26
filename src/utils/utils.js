export const getDate = (milliseconds) => {
  const date = new Date(milliseconds);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const returnDate = dd + "/" + mm + "/" + yyyy;
  return returnDate;
};

export const groupMessage = (message) => {
  let groupMessage = new Map();
  message.forEach((item) => {
    item.messageList.forEach((message) => {
      let date = getDate(message.timestamp);
      if (groupMessage.has(date)) {
        let list = groupMessage.get(date);
        list.push(message);
        groupMessage.set(date, list);
      } else {
        groupMessage.set(date, [message]);
      }
    });
  });
  return groupMessage;
};

export const getTime = (milliseconds) => {
  return new Date(milliseconds).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
};

const MIN_RANDOM = 0;
const MAX_RANDOM = 5000;
const RANDOM_STEP = 1;

function generateRandom(min, max, step) {
  const randomNum = min + Math.random() * (max - min);
  return Math.round(randomNum / step) * step;
}

export function myRandom() {
  return generateRandom(MIN_RANDOM, MAX_RANDOM, RANDOM_STEP);
}

