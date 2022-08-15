import List from "./index.js";

//👇 This default export determines where your story goes in the story list
export default {
  title: "List",
  component: List
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "kaz",
  id: "111",
  image: "https://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg"
};
