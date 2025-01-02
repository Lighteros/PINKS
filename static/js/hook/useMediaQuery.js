import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(true);
  const mediaQuery = query || "(max-width: 768px)";

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    const listener = () => setMatches(media.matches);

    // 立即检查当前查询的匹配状态
    listener();

    // 监听变化
    media.addEventListener("change", listener);

    // 组件卸载时移除监听器
    return () => media.removeEventListener("change", listener);
  }, [mediaQuery]);  // 只在查询字符串改变时重新执行

  return matches;
}

export default useMediaQuery;
