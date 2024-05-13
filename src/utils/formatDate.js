export default function (timestamp, showTime = false) {
  const date = new Date(+timestamp);
  // console.log(timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDay().toString().padStart(2, "0");

  let result = `${date.getFullYear()}-${month}-${day}`;
  if (showTime) {
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const seconde = date.getSeconds().toString().padStart(2, "0");
    result = `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${seconde}`;
  }
  return result;
}
