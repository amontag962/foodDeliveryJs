const renderItems = (data) => {
  console.log(data);
};

fetch(`./db/partners.json`)
  .then((Response) => Response.json())
  .then((data) => {
    renderItems(data);
  });
.catch((error) => {
  console.log(error);
})