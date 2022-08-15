import  InputField  from "./index.js";

//👇 This default export determines where your story goes in the story list
export default {
 
  title: "Input",
  component: InputField
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <InputField {...args} />;

export const srimary = Template.bind({});
srimary.args = {
 handleData:{handleData:"ok"}
};