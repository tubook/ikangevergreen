import device from "current-device";

export const getDeviceType = () => {
  let type;
  switch (device.type) {
    case "mobile": // 手机
    case "tablet": // 平板
      type = "mobile";
      break;
    // case 'tablet':
    //   type = 'pad'
    //   break
    case "desktop": // pc
      type = "pc";
      break;
  }
  return type;
};
