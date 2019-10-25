/**
 * 判断浏览器是否支持某字体
 * @param {String} fontFamily
 * @return {Boolean} 
 */
var isSupportFontFamily = function(fontFamily) {
  if (typeof fontFamily != "string") {
    return false;
  }

  var defaultFontFamily = "Arial";
  if (fontFamily.toLowerCase() == defaultFontFamily.toLowerCase()) {
    return true;
  }

  var defaultLetter = "a";
  var defaultFontSize = 100;

  // 使用该字体绘制的canvas
  var width = 100,
    height = 100;
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  // 全局一致的绘制设定
  context.textAlign = "center";
  context.fillStyle = "black";
  context.textBaseline = "middle";
  var getFontData = function(fontFamily) {
    // 清除
    context.clearRect(0, 0, width, height);
    // 设置字体
    context.font =
      defaultFontSize + "px " + fontFamily + ", " + defaultFontFamily;
    context.fillText(defaultLetter, width / 2, height / 2);

    var data = context.getImageData(0, 0, width, height).data;

    return [].slice.call(data).filter(function(value) {
      return value != 0;
    });
  };

  return (
    getFontData(defaultFontFamily).join("") !== getFontData(fontFamily).join("")
  );
};

export {
  isSupportFontFamily
}
