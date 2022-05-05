const coloorsUrlBlue = "https://coolors.co/40798c-70a9a1-b48291-9ec1a3-cfe0c3";
// const coloorsUrlGreen = "https://coolors.co/11270b-3c5a14-598b2c-669d31-71b340";
// const coloorsUrlPink = "https://coolors.co/cc444b-da5552-df7373-e39695-e4b1ab";

export const buildColors = () => {
  const colors = coloorsUrlBlue
    .split(".co/")[1]
    .split("-")
    .map((hex) => `#${hex}`);

  return colors;
};
