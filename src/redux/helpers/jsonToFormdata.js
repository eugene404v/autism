const jsonFormater = (json) => {
  const formdata = new FormData();
  let key;
  for (key in json) {
    if (json[key] !== true && json[key] !== false) {
        formdata.append(key, json[key]);
    } else if (json[key]===true) {
        formdata.append(key, 1);
    } else if (json[key]===false) {
        formdata.append(key, 0);
    }
  }
  return formdata
};

export default jsonFormater;