/**
 * 強制リフロー
 */
const reflow = (element: HTMLElement): number => element.offsetHeight;

/**
 * 引数のセレクタに該当する要素にinert属性を付与
 */
const setInert = (selectors: string[]): void => {
  const items = document.querySelectorAll(selectors.join(','));

  for (const item of items) {
    (item as HTMLElement).inert = true;
  }
};

/**
 * 引数のセレクタに該当する要素からinert属性を除去
 */
const removeInert = (selectors: string[]): void => {
  const items = document.querySelectorAll(selectors.join(','));

  for (const item of items) {
    (item as HTMLElement).inert = false;
  }
};

/**
 * template要素のクローンをDOM挿入する
 */
const cloneTemplate = (
  templateObject: HTMLTemplateElement,
  targetObject: HTMLElement,
  cloneSelector?: string,
  position?: 'prepend' | 'append' | 'before' | 'after',
): HTMLElement | null => {
  const template = templateObject;
  const target = targetObject;
  let clone: HTMLElement | null = null;
  const fragment = document.importNode(template.content, true);

  if (position === 'prepend') {
    target.insertBefore(fragment, target.firstChild);
  } else if (position === 'append') {
    target.appendChild(fragment);
  } else if (position === 'before') {
    target.parentNode?.insertBefore(fragment, target);
  } else {
    target.parentNode?.insertBefore(fragment, target.nextSibling);
  }

  if (cloneSelector && cloneSelector !== '') {
    // 同じセレクタが複数あった場合を想定し、最後に追加された要素を取得
    const allElements = target.querySelectorAll(cloneSelector);
    clone = allElements[allElements.length - 1] as HTMLElement;
  }

  return clone;
};

/**
 * 間引き処理（throttle）
 *
 * ```
 * // スクロールイベントのリスナーに throttle() を使用
 * window.addEventListener('scroll', throttle ((e) => {
 *   console.log('window.scrollY: ', window.scrollY)
 * }, 100));  // 待機時間 100ms
 * ```
 */
const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  timeout: number,
): ((...args: Parameters<T>) => void) => {
  let isWaiting = false;

  return function (this: unknown, ...args: Parameters<T>): void {
    if (!isWaiting) {
      func.apply(this, args);
      isWaiting = true;

      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};

/**
 * 間引き処理（debounce）
 *
 * ```
 * //呼び出しを制御したい関数
 * const myFunc = () => {
 *   console.log(window.scrollY);
 * }
 *
 * // debounce() に対象の関数と遅延時間を指定すると拡張した関数を返す
 * const debouncedFunc = debounce(myFunc, 100);
 *
 * // debounce() の戻り値の拡張した関数を利用
 * window.addEventListener('scroll', debouncedFunc);
 * ```
 */
const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  timeout: number,
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (this: unknown, ...args: Parameters<T>): void {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export { cloneTemplate, debounce, reflow, removeInert, setInert, throttle };
