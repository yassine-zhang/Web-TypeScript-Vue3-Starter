/**
 * 检查当前设备是否为移动设备
 *
 * 该函数通过检查用户代理字符串来判断当前设备是否为移动设备
 * 如果用户代理字符串中包含特定的移动设备关键词，则返回 true，否则返回 false
 *
 * @returns {boolean} 如果是移动设备，返回 true，否则返回 false
 */
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}
