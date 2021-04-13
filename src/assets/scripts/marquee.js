import Limarquee from "limarquee";

const tickerText = $(".ticker-wrapper.text"),
  tickerImgs = $(".ticker-wrapper.images");

const recognition = () => {
  const limarquee = new Limarquee(".recognition__content-row");
  limarquee.render({
    circular: true,
    loop: -1,
    drag: false,
    hoverstop: false,
    scrollamount: 80,
  });
};

// const aboutCompanyTicker = () => {
//   let timer;

//   const limarqueeText = new Limarquee(tickerText),
//     limarqueeImgs = new Limarquee(tickerImgs);

//   limarqueeText.render({
//     circular: false,
//     drag: false,
//     hoverstop: false,
//     scrollamount: 140,
//   });
//   limarqueeImgs.render({
//     circular: true,
//     drag: false,
//     hoverstop: false,
//     scrollamount: 180,
//   });

//   $(window).on("scroll", () => {
//     // const tickerTextMoved = tickerText.find(".str_move"),
//     //   tickerImgsMoved = tickerImgs.find(".str_move");

//     // let textLeft = parseInt(tickerTextMoved.css("left").match(/\d+/)),
//     //   imgsLeft = tickerImgsMoved.css("left");

//     // console.log("textLeft: ", textLeft);

//     // tickerTextMoved.css("left", textLeft - 300 + "px");

//     // console.log("textLeft: ", tickerTextMoved.css("left"));
//   });
// };

recognition();
// aboutCompanyTicker();
